import Layout from "../components/Layout";
import ReactPlayer from "react-player";
import { useState } from "react";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(true);

  return (
    <Layout title="Video Resume" description="A short video introduction of Mauricio A. Castillo.">
      <section className="section">
        <div className="section-head">
          <h2>Video resume</h2>
          <p className="section-sub">A quick introduction to who I am and how I work.</p>
        </div>
        <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--border-strong)", background: "#000" }}>
          <ReactPlayer
            url="VideoResumeMP4.mp4"
            playing={playing}
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
        </div>
      </section>
    </Layout>
  );
};

export default VideoPlayer;
