import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

interface YouTubeCleanProps {
  videoId: string;
  width?: string | number;
  height?: string | number;
}

export default function YouTubeClean({
  videoId,
  width = "100%",
  height = "100%",
}: YouTubeCleanProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const previewUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className="videoFrame"
      style={{
        position: "relative",
        paddingBottom: "43.25%",
        height: 0,
      }}
    >
      {!isPlaying ? (
        <div
          onClick={() => setIsPlaying(true)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${previewUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "40px",
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaYoutube color="#c61f25" size={100} />
          </div>
        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      )}
    </div>
  );
}
