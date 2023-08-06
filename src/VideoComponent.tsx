import { LegacyRef, forwardRef, useImperativeHandle, useRef } from "react";

interface IVideoProps {}

interface IVideoHandleRef {
  play: () => void;
  pause: () => void;
}

const Video = (props: IVideoProps, ref: LegacyRef<HTMLVideoElement> | null) => {
  return (
    <video
      ref={ref}
      src="https://file-examples.com/storage/fe072e668b64cd6ce9c9963/2017/04/file_example_MP4_480_1_5MG.mp4"
      width={500}
    />
  );
};

export default forwardRef(Video);

// const Video: React.ForwardRefRenderFunction<IVideoHandleRef, IVideoProps> = (
//   props,
//   forwardedRef
// ) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   useImperativeHandle(forwardedRef, () => ({
//     play() {
//       videoRef.current?.play();
//     },
//     pause() {
//       videoRef.current?.pause();
//     },
//   }));
//   return (
//     <video
//       ref={videoRef}
//       //ref={ref}
//       src="https://file-examples.com/storage/fe072e668b64cd6ce9c9963/2017/04/file_example_MP4_480_1_5MG.mp4"
//       width={500}
//     />
//   );
// };

// export default forwardRef(Video);
