import { useRef } from "react";
import "./App.css";
import Video from "./VideoComponent";
import Content from "./Content";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // type VideoHandle = React.ElementRef<typeof Video>;
  // const videoRef = useRef<VideoHandle>(null);
  // console.log("🚀 ~ file: App.tsx:9 ~ App ~ videoRef:", videoRef);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      // videoRef.current.remove();
      videoRef.current.play();
    }
  };
  const handlePauseVideo = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div className="App">
      {/* <Video ref={videoRef} />
      <button onClick={handlePlayVideo}>Play</button>
      <button onClick={handlePauseVideo}>Pause</button> */}
      <Content />
    </div>
  );
}

export default App;
