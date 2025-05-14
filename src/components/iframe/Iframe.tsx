type IframeProps = {
  videoId: string;
};

export default function Iframe({ videoId }: IframeProps) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"
        allowFullScreen
      />
    </div>
  );
}
