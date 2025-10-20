"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./InvestorBenifits.module.css";
import img1 from "../../assets/benifits/img-1.webp";
import img2 from "../../assets/benifits/img-2.webp";
import img3 from "../../assets/benifits/img-3.webp";
import img4 from "../../assets/benifits/img-4.webp";
import img5 from "../../assets/benifits/img-5.webp";

interface Benefit {
  id: number;
  title: string;
  image: string;
  text: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: "Инновация на традиционном рынке",
    image: img1,
    text: `Мы нашли свою нишу на данном рынке для того, чтобы конкурировать с самими собой, 
а не с наиболее известными компаниями и их всемирно известными брендами на рынке.`,
  },
  {
    id: 2,
    title: "Гарантированно высокий спрос",
    image: img2,
    text: `Тем самым мы и отстраиваемся от конкурентов вне зависимости от известности их брендов, 
и повышаем потенциальную прибыль ввиду того, что сырьё, которое мы решили использовать для наполнения, 
является более простым и дешёвым в производстве.`,
  },
  {
    id: 3,
    title: "Расширение проекта в соседних сегментах",
    image: img3,
    text: `Помимо прочего, мы получаем возможность дифференциации по поставкам сырья, 
не привязываясь только к одной стране. Это даёт нам технологическую свободу при выборе страны для размещения производства.`,
  },
  {
    id: 4,
    title: "Перспективность проекта и надёжность инвестиций",
    image: img4,
    text: `Мы создаём новый рынок, основанный на стабильном спросе и инновациях, что формирует устойчивую долгосрочную ценность для инвестора.`,
  },
  {
    id: 5,
    title: "Компетенции руководителя проекта и команды",
    image: img5,
    text: `Проект реализуется опытной командой с глубокими знаниями отрасли и подтверждёнными результатами.`,
  },
];

export default function InvestorBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
  const handleNext = () =>
    setActiveIndex((prev) => (prev + 1) % benefits.length);

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <div>
          <h2 className={styles.title}>Главные выгоды инвестора</h2>

          <p key={activeIndex} className={styles.text}>
            {benefits[activeIndex].text}
          </p>
        </div>
        <div className={styles.controls}>
          <button
            onClick={handlePrev}
            className={`${"swiper-button-prev custom-prev"} ${styles.arrowL}`}
          ></button>
          <button
            onClick={handleNext}
            className={`${"swiper-button-next custom-next"} ${styles.arrowR}`}
          ></button>
        </div>
      </div>

      <div className={styles.right}>
        <Swiper
          direction="vertical"
          slidesPerView={benefits.length}
          spaceBetween={10}
          allowTouchMove={false}
          modules={[Navigation]}
          className={styles.swiper}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {benefits.map((benefit, i) => (
            <SwiperSlide key={benefit.id}>
              <button
                className={`${styles.card} ${
                  activeIndex === i ? styles.active : ""
                }`}
                onClick={() => setActiveIndex(i)}
              >
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className={styles.cardImage}
                />
                <span className={styles.cardTitle}>{benefit.title}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
