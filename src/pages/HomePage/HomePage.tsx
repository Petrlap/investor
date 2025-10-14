import logo from "../../assets/logo.webp";
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import YouTubeClean from "../../components/YouTubeCleanProps/YouTubeCleanProps";
import { GoArrowUpRight } from "react-icons/go";
import { LuFileDown } from "react-icons/lu";

const Home = () => {
  return (
    <div>
      <section className={styles.videoBlock}>
        <div className={styles.videoLeftBlock}>
          <p className={styles.videoPrev}>Comforta International Corporation</p>
          <p className={styles.videoTitle}>
            <span>Инвестируй в производство</span> гигиенических товаров для
            детей и взрослых.
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
            Инвестировать <GoArrowUpRight color="#fff" />
          </button>
        </div>
        <YouTubeClean videoId="ho2jfFgQVTk" />
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section className={styles.notes}>
        <h2>Примечания по финансовому плану:</h2>
        <p>
          Для упрощения считали, что вся необходимая для проекта сумма будет
          доступна уже в первом квартале 2026 года; В нулевой период в течение
          1,5 лет, необходимых для запуска проекта, продукция будет
          производиться на сторонних производственных мощностях в Японии и Китае
          (контакты заключены);
        </p>
        <p>
          Расчеты в финансовом плане сформированы в пессимистическом сценарии
          (заведомо увеличенные расходы при минимальном расчетном объеме
          реализации и сниженной рентабельности продаж);
        </p>
        <div className={styles.notesLine}>
          <div>
            <span>PI</span>
            <p className={styles.bigText}>12,83%</p>
            <p>PI</p>
            <p>(Profitability Index) - return on Investment Index</p>
          </div>
          <div className={styles.gr}>
            <span>PB</span>
            <p className={styles.bigText}>13</p>
            <p>PB</p>
            <p>(Pay Back) - payback period of the project</p>
          </div>
          <div>
            <span>ARR</span>
            <p className={styles.bigText}>256,5%</p>
            <p>ARR</p>
            <p>(Accounting rate of return) - investment efficiency ratio</p>
          </div>
          <div className={styles.l_gr}>
            <span>IRR</span>
            <p className={styles.bigText}>214%</p>
            <p>IRR</p>
            <p>
              (Internal Rate of Return) - the rate at which the investment pays
              off completely
            </p>
          </div>
        </div>
        <div className={styles.notesLine}>
          <div className={styles.notesLineF}>
            <p>
              Подобные бизнес-планы сделаны нами всего по четырем странам для
              принятия решения о выборе страны нахождения нового производства,
              но показываем только один по наиболее перспективной стране.
            </p>
            <button>
              Бизнес план открыть <LuFileDown />
            </button>
          </div>
          <div>
            <span>MIRR</span>
            <p className={styles.bigText}>66,58%</p>
            <p>MIRR</p>
            <p>
              (Modified internal rate of return) - a financial indicator that
              helps determine the attractiveness of investments.
            </p>
          </div>
          <div className={styles.l_gr}>
            <span>NPV</span>
            <p className={styles.bigText}>$42,2M</p>
            <p>NPV</p>
            <p>
              (Net Present Value) - The coefficient helps to determine how much
              income you can expect in the future by investing in the project
              now
            </p>
          </div>
        </div>
      </section>
      <section></section>
      <section className={styles.businessBlock}>
        <h2>Наша бизнес-модель</h2>
        <div className="swiper-button-prev custom-prev"></div>
        <div className="swiper-button-next custom-next"></div>
        <div className="swiper-pagination custom-pagination"></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          loop={false}
          className={styles.businessSwiper}
        >
          <SwiperSlide>
            <div className={styles.businessModel}>
              <div className={styles.twoBlock}>
                <h3>1. ПОТРЕБИТЕЛЬСКИЕ СЕГМЕНТЫ (ЦЕЛЕВЫЕ ГРУППЫ)</h3>
                <p>
                  Страна: страна нахождения производства. Потребительские
                  сегменты:
                </p>
                <ul>
                  <li>Дети от 0 до 3-х лет.</li>
                  <li>Взрослые от 50 до 95 лет.</li>
                  <li>Женщины от 14 до 52 лет.</li>
                </ul>
                <p>
                  Доход: низкий, средний и выше среднего. Вторичный сегмент:
                  оптовые покупатели, включая торговые сети, маркетплейсы и
                  мега-моллы.
                </p>
              </div>
              <div className={styles.twoBlock}>
                <h3>2. ЦЕННОСТНЫЕ ПРЕДЛОЖЕНИЯ</h3>
                <p>
                  Экологичные на 100% и гипоаллергенные изделия из инновационных
                  материалов, которые пока не предлагают конкуренты.
                </p>
                <p>Адаптированный под страну производства дизайн продукции.</p>
                <p>
                  По комфортным ценам и с максимальными возможностями сервиса
                  (доставка, обмен и прочее).
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.businessModel}>
              <div className={styles.oneBlock}>
                <h3>3. ВЗАИМООТНОШЕНИЯ С КЛИЕНТАМИ</h3>
                <p>
                  Привлекаем посредством рекламы (интернет-реклама, реклама на
                  тематических площадках, реклама в профильных изданиях, реклама
                  в аптечных пунктах, выставки). Рассылка информационных флаеров
                  и образцов товара при отправке заказов. Стимулирование продаж
                  и продвижения на местном уровне.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.businessModel}>
              <div className={styles.twoBlock}>
                <h3>4. ИСТОЧНИКИ ДОХОДОВ</h3>
                <p>Розничные продажи.</p>
                <p>Оптовые продажи.</p>
                <p>Поставки социальным службам.</p>
                <p>Производство private label.</p>
              </div>
              <div className={styles.twoBlock}>
                <h3>5. КАНАЛЫ СБЫТА</h3>
                <p>Интернет-магазины.</p>
                <p>Маркеты, супермаркеты, мега-моллы.</p>
                <p>Маркетплейсы.</p>
                <p>Оптовые клиенты.</p>
                <p>Социальные службы.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.businessModel}>
              <div className={styles.oneBlock}>
                <h3>6. КЛЮЧЕВЫЕ ВИДЫ ДЕЯТЕЛЬНОСТИ (КЛЮЧЕВЫЕ ПРОЦЕССЫ)</h3>
                <p>
                  Производство: придерживаемся концепции бережного производства.
                  Рациональность и разумная экономика для минимизации издержек и
                  максимизации прибыли. Маркетинг: входим сразу в два ценовых
                  сегмента – средний и средне-высокий. Расширяем продажи за счёт
                  комплексного продвижения бренда (реклама + промоушен).
                </p>
                <p>
                  Продажи и логистика: ключевое звено – фулфилмент склад,
                  решающий задачи хранения, учёта, обработки и доставки заказов
                  оптовым и розничным клиентам. Коммуникации: клиенты все
                  общение через фулфилмент-оператора, с обществом через СМИ.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.businessModel}>
              <div className={styles.twoBlock}>
                <h3>7. КЛЮЧЕВЫЕ РЕСУРСЫ</h3>
                <p>
                  Финансы: краткосрочное, среднесрочное и долгосрочное
                  планирование, учёт, контроль использования.
                </p>
                <p>
                  Персонал: обучение,стимулирование, контроль, развитие,
                  коммуникации, образование.
                </p>
                <p>
                  Партнёры: поиск, развитие, контроль выкладки и ценобразования,
                  стимулирование и поддержка.
                </p>
                <p>
                  Сырьё и материалы: дублирование (при возможности) поставщиков,
                  работа по долгосрочным контрактам.
                </p>
              </div>
              <div className={styles.twoBlock}>
                <h3>8. КЛЮЧЕВЫЕ ПАРТНЁРЫ</h3>
                <p>
                  Поставщики оборудования: поставка, наладка, обучение,
                  модернизация, поставка запчастей.
                </p>
                <p>
                  Поставщики сырья: работа по долгосрочным контрактам с
                  прогнозируемыми ценами с учётом волатильности валют.
                </p>
                <p>
                  Фулфилмент-оператор: работа по долгосрочному контракту.
                  Возможность лёгкой замены на конкурента при необоснованном
                  повышении цен на услуги.
                </p>
                <p>
                  Оптовые партнёры и маркетплейсы: обеспечение доставки заказов,
                  выкладки товара и рекомендуемые цены.
                </p>
                <p>
                  Постоянные розничные покупатели: увеличение лояльности,
                  стимулирование покупок и отзывов в торговых сервисах.
                  Довольные покупатели = реклама.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.businessModel}>
              <div className={styles.twoBlock}>
                <h3>9. СТРУКТУРА ЗАТРАТ</h3>
                <p>Капитальные расходы – 1%.</p>
                <p>Реклама и промоушен – 7%.</p>
                <p>Зарплата – 7%.</p>
                <p>Аренда – 7%.</p>
                <p>Коммунальные расходы – 2%.</p>
                <p>Оплата маркетплейсов – 18%.</p>
                <p>Складские и обработка заказов – 7%.</p>
                <p>Сырьё и материалы – 46%.</p>
                <p>Амортизация – 5%.</p>
                <p>Производственные издержки – (остальное).</p>
              </div>
              <img src={logo} alt="Logo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export { Home };
