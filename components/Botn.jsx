

const Botn = ({urlink, icon}) => {
  let size = "38";
  if (icon.slice(-13) === "handshake.gif") size = "85"
  return (
    <a href={urlink} className="intermitente">
      <span className="span1"></span>
      <span className="span2"></span>
      <span className="span3"></span>
      <span className="span4"></span>
      <img width={`${size}px`} align="center" src={icon} />
    </a>
  );
};

export default Botn;