import Layout from "../components/Layout";
import ReactPlayer from 'react-player';
import { useState } from "react";

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <Layout title="Video Resume">
            <div align="center">
                <ReactPlayer url="VideoResumeMP4.mp4"  playing={ isPlaying } controls  />
            </div>
        </Layout>
    );
};

export default VideoPlayer;
