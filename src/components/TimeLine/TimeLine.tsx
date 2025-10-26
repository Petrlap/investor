import logo from "../../assets/logo.webp";
import styles from "./TimeLine.module.css";

const items = [
  {
    month: "Dec",
    year: "2025",
    side: "left",
    title: "Достижение сбора",
    percent: "25%",
    text: "Выбор и приобретение производственной площадки. Получение необходимых разрешений. Подключение инженерных мощностей, водоснабжения и канализации.",
    status: true,
  },
  {
    month: "Mar",
    year: "2026",
    side: "right",
    title: "Достижение сбора",
    percent: "25%",
    text: "Строительные работы. Обустройство производственной площадки.",
    status: false,
  },
  {
    month: "Jun",
    year: "2026",
    side: "left",
    title: "Достижение сбора",
    percent: "35%",
    text: "Покупка, доставка и установка основного и вспомогательного оборудования.",
    status: false,
  },
  {
    month: "Aug",
    year: "2026",
    side: "right",
    title: "Достижение сбора",
    percent: "15%",
    text: "Приобретение необходимого сырья и материалов. Найм и обучение производственного персонала. Начало работы производственного цеха. Сертификация продукции.",
    status: false,
  },
];

export default function TimeLine() {
  return (
    <section className={styles.timelineContainer}>
      <h2>Таймлайн проекта</h2>
      <div className={styles.timeline}>
        {items.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div
              className={`${styles.date} ${
                item.status === true ? styles.true : ""
              }`}
            >
              <span>{item.month}</span>
              <span>{item.year}</span>
            </div>

            <div
              className={`${styles.content} ${
                item.side === "right" ? styles.right : styles.left
              }`}
            >
              <div className={styles.bridge}></div>
              <div className={styles.bridgeMob}></div>
              <h3>{item.title}</h3>
              <p className={styles.percent}>{item.percent}</p>
              <p className={styles.contentText}>{item.text}</p>
              <p
                className={`${styles.status} ${
                  item.status === true ? styles.true : ""
                }`}
              >
                Статус<span></span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.timelineBox}>
        <img src={logo} alt="Logo" />
        <div>
          <p>Получи финансовый прогноз на почту?телеонтелеграм</p>
          <button>Финансовый прогноз xls</button>
        </div>
      </div>
    </section>
  );
}
