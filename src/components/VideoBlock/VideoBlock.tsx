import LocalVideoClean from "../../components/LocalVideoClean/LocalVideoClean";
import { GoArrowUpRight } from "react-icons/go";
import styles from "./VideoBlock.module.css";
import { IconWrapper } from "../../components/IconWrapper/IconWrapper";

export default function VideoBlock() {
  return (
    <section className={styles.videoBlock}>
      <div className={styles.videoLeftBlock}>
        <p className={`${styles.videoPrev} ${styles.desk}`}>
          Comforta International Corporation
        </p>
        <p className={styles.videoTitle}>
          <span>Инвестируй в производство</span> гигиенических товаров для детей
          и взрослых.
        </p>
        <p className={styles.videoText}>
          Отличная возможность инвестировать в реальную экономику!
        </p>
        <div className={styles.videoTextGrid}>
          <div>
            <span>PI</span>
            <p>12,83%</p>
          </div>
          <div>
            <span>IRR</span>
            <p>214%</p>
          </div>
          <div>
            <span>PB</span>
            <p>13</p>
          </div>
          <div>
            <span>ARR</span>
            <p>256,5%</p>
          </div>
          <div>
            <span>MIRR</span>
            <p>66,58%</p>
          </div>
          <div>
            <span>NPV</span>
            <p>$42,2M</p>
          </div>
        </div>
        <button>
          Инвестировать
          <IconWrapper
            Icon={GoArrowUpRight}
            className=""
            style={{ color: "#fff" }}
          />
        </button>
      </div>
      <LocalVideoClean />
      <p className={`${styles.videoPrev} ${styles.mob}`}>
        Comforta International Corporation
      </p>
    </section>
  );
}
