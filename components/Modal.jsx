import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, title, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (!show) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current && closeRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [show, onClose]);

  if (!isBrowser || !show) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-label={title || "Dialog"}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          {title && <Title>{title}</Title>}
          <Close
            ref={closeRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </Close>
        </Header>
        <Body>{children}</Body>
      </Dialog>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(5, 4, 9, 0.7);
  backdrop-filter: blur(3px);
  z-index: 100;
`;

const Dialog = styled.div`
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  width: 100%;
  max-width: 460px;
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 22px 0;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin: 0;
`;

const Close = styled.button`
  background: none;
  border: none;
  color: var(--text-2);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.16s ease, color 0.16s ease;
  flex: none;
  &:hover {
    background: var(--surface-2);
    color: var(--text);
  }
`;

const Body = styled.div`
  padding: 16px 22px 22px;
  overflow-y: auto;
`;

export default Modal;
