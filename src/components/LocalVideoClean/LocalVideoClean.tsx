import { useState, useRef, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import bannerVideo from "../../assets/banner.mp4";
import bannerPoster from "../../assets/banner.webp";
import styles from "./LocalVideoClean.module.css";

export default function LocalVideoClean() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const v = videoRef.current;

      const tryPlay = async () => {
        try {
          await v.play();
        } catch {
          v.muted = true;
          await v.play().catch(() => {});
        }
      };

      tryPlay();
    }
  }, [isPlaying]);

  return (
    <div className={styles.videoFrame}>
      {!isPlaying ? (
        <div
          onClick={() => setIsPlaying(true)}
          className={styles.videoContainer}
          style={{
            backgroundImage: `url(${bannerPoster})`,
          }}
        >
          <FaYoutube color="#c61f25" size={100} />
        </div>
      ) : (
        <video
          ref={videoRef}
          src={bannerVideo}
          poster={bannerPoster}
          controls
          playsInline
          className={styles.video}
        />
      )}
    </div>
  );
}
