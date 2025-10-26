import { useState } from "react";
import styles from "./Products.module.css";
import img1 from "../../assets/products/img-1.webp";
import img2 from "../../assets/products/img-2.webp";
import img3 from "../../assets/products/img-3.webp";
import img4 from "../../assets/products/img-4.webp";
import img5 from "../../assets/products/img-5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [img1, img2, img3, img4, img5, img5];

export default function Products() {
  const [activeImage, setActiveImage] = useState(img1);
  return (
    <section className={styles.products}>
      <div className={styles.productsLeft}>
        <h2>Продукция</h2>
        {window.innerWidth > 1023 ? (
          <img src={activeImage} alt="Active product" />
        ) : (
          <div className={styles.imageBlock}>
            <img src={activeImage} alt="Active product" />
            <p className={styles.productsCol}>
              <span>24+</span>Продуктов
            </p>
          </div>
        )}
      </div>
      <div className={styles.productsRight}>
        {window.innerWidth < 1023 && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".products-custom-next",
              prevEl: ".products-custom-prev",
            }}
            loop={true}
            onSlideChange={(swiper: any) => {
              const realIndex = swiper.realIndex;
              setActiveImage(products[realIndex] || img1);
            }}
            className={`${styles.productsSwiper} products-custom-swipper`}
          >
            <SwiperSlide>
              <img src={img1} alt="Product 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Product 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Product 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Product 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Product 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Product 6" />
            </SwiperSlide>
          </Swiper>
        )}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <p className={`${styles.productsCol} ${styles.desc}`}>
          <span>24+</span>Продуктов
        </p>
        <div
          id={styles.customPrev}
          className={`${"swiper-button-prev products-custom-prev"} ${
            styles.customPrev
          }`}
        ></div>
        <div
          id={styles.customNext}
          className={`${"swiper-button-next products-custom-next"} ${
            styles.customNext
          }`}
        ></div>
        {window.innerWidth > 1023 && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={{
              nextEl: ".products-custom-next",
              prevEl: ".products-custom-prev",
            }}
            loop={true}
            onSlideChange={(swiper: any) => {
              const realIndex = swiper.realIndex;
              setActiveImage(products[realIndex] || img1);
            }}
            className={`${styles.productsSwiper} products-custom-swipper`}
          >
            <SwiperSlide>
              <img src={img1} alt="Product 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Product 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="Product 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="Product 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Product 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="Product 6" />
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </section>
  );
}
