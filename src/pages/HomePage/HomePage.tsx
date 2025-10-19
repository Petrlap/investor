import React, { useState } from "react";
import logo from "../../assets/logo.webp";
import img1 from "../../assets/products/img-1.webp";
import img2 from "../../assets/products/img-2.webp";
import img3 from "../../assets/products/img-3.webp";
import img4 from "../../assets/products/img-4.webp";
import img5 from "../../assets/products/img-5.webp";
import styles from "./Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import YouTubeClean from "../../components/YouTubeCleanProps/YouTubeCleanProps";
import { GoArrowUpRight } from "react-icons/go";
import { LuFileDown } from "react-icons/lu";

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

const products = [img1, img2, img3, img4, img5, img5];

const Home = () => {
  const [activeImage, setActiveImage] = useState(img1);

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
      <section>
        <div>
          <h2>Главные выгоды инвестора</h2>
          <p>
            Мы нашли свою нишу на данном рынке для того, чтобы конкурировать с
            самими собой, а не с наиболее известными компаниями и их всемирно
            известными брендами на рынке.{" "}
          </p>
          <p>
            Тем самым мы и отстраиваемся от конкурентов вне зависимости от
            известности их брендов, и повышаем потенциальную прибыль ввиду того,
            что сырье, которое мы решили использовать для наполнения, является
            более простым и дешевым в производстве. Тем самым на существующем
            рынке создаем свой рынок.{" "}
          </p>
          <p>
            Помимо прочего, мы получаем возможность дифференциации по поставкам
            сырья, не привязываясь только к одной стране (можно догадаться
            какой). И это дает нам нужную свободу по выбору страны, в которой мы
            будем строить свое высоко технологичное
          </p>
        </div>
        <div>
          <div>
            <img />
            <p>Инновация на традиционном рынке</p>
          </div>
          <div>
            <img />
            <p>Гарантированно высокий спрос</p>
          </div>
          <div>
            <img />
            <p>Расширение проекта в соседних сегментах</p>
          </div>
          <div>
            <img />
            <p>Перспективность проекта и надежость инвестиций</p>
          </div>
          <div>
            <img />
            <p>Компетенции руководителя проекта и команды</p>
          </div>
        </div>
      </section>
      <section className={styles.products}>
        <div className={styles.productsLeft}>
          <h2>Продукция</h2>
          <img src={activeImage} alt="Active product" />
        </div>
        <div className={styles.productsRight}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className={styles.productsCol}>
            <span>24+</span>Продуктов
          </p>
          <div className="swiper-button-prev products-custom-prev"></div>
          <div className="swiper-button-next products-custom-next"></div>
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
        </div>
      </section>
      <section className={styles.description}>
        <h2>
          Описание<br></br>инвестиционного проекта
        </h2>
        <div className={styles.goals}>
          <div className={styles.goalLeft}>
            <p className={styles.goalLeftText}>
              Цель инвестиционного проекта COMFORTA – строительство современной
              фабрики по производству средств гигиены
            </p>
            <p className={styles.goalLeftText}>
              Планирующаяся к выпуску продукция:
            </p>
            <ul className={styles.goalLeftUl}>
              <li>детские подгузники,</li>
              <li>детские подгузники-трусики,</li>
              <li>детские одноразовые пеленки,</li>
              <li>подгузники-трусики для взрослых,</li>
              <li>влажные гигиенические платочки для детей,</li>
              <li>влажные гигиенические платочки для взрослых,</li>
              <li>средства женской гигиены.</li>
            </ul>
            <div className={styles.goalImages}>
              <img src={img1} alt="Image 1" />
              <img src={img2} alt="Image 2" />
              <img src={img3} alt="Image 3" />
              <img src={img4} alt="Image 4" />
              <img src={img5} alt="Image 5" />
              <img src={img5} alt="Image 6" />
            </div>
            <p className={styles.goalPreSc}>и еще 18 видов продукции</p>
            <h4>Документы по проекту</h4>
            <div className={styles.goalLinks}>
              <a href="#">
                <LuFileDown color="#0090FF" />
                <span>Меморандум</span>
              </a>
              <a href="#">
                <LuFileDown color="#0090FF" />
                <span>Инвест проект</span>
              </a>
              <a href="#">
                <LuFileDown color="#0090FF" />
                <span>Бизнес план</span>
              </a>
            </div>
          </div>
          <div className={styles.goalRight}>
            <p>Хотите получить документы - пожалуйста, ЗАРЕГИСТРИЙТЕСЬ.</p>
            <form>
              <div className={styles.goalRightBox}>
                <input placeholder="Ваше имя"></input>
                <input placeholder="Ваш телефон*"></input>
                <input placeholder="Ваш телеграм"></input>
                <input placeholder="Ваш E-mail*"></input>
              </div>
              <input type="button" value="Зарегистрироваться"></input>
            </form>
            <span>Скачайте более подробную презентацию, взамен телефона</span>
          </div>
        </div>
        <h2>Проект имеет 4 основные стадии развития:</h2>
        <div className={styles.stageLong}>
          <p className={styles.stageNumber}>0</p>
          <p className={styles.stageText}>
            <b>0. стадия</b> заказа нашей продукции на сторонних производствах
            по заключённым контактам. Примерный срок: 1,5 года (до ввода нашей
            фабрики в эксплуатацию).
          </p>
          <a href="#" className={styles.stageLink}>
            <GoArrowUpRight color="#A8C686" />
          </a>
        </div>
        <div className={styles.stages}>
          <div className={styles.stage}>
            <p className={styles.stageNumber}>1</p>
            <p className={styles.boldText}>1. стадия</p>
            <p className={styles.stageText}>
              Строительства производства, поставки и наладки оборудования,
              обучения персонала. Примерный срок: 1 год.
            </p>
            <a href="#" className={`${styles.stageLink} ${styles.stageLinkGr}`}>
              <GoArrowUpRight color="#fff" />
            </a>
          </div>
          <div className={`${styles.stage} ${styles.l_gr}`}>
            <p className={styles.stageNumber}>2</p>
            <p className={styles.boldText}>2. стадия</p>
            <p className={styles.stageText}>
              Начала работы и развития выпуска ассортимента. Примерный срок: 1
              год.
            </p>
            <a href="#" className={styles.stageLink}>
              <GoArrowUpRight color="#A8C686" />
            </a>
          </div>
          <div className={`${styles.stage} ${styles.l_bl}`}>
            <p className={styles.stageNumber}>3</p>
            <p className={styles.boldText}>3. стадия</p>
            <p className={styles.stageText}>
              Развития национальной дистрибуции. Примерный срок: 1,5 года.
            </p>
            <a
              href="#"
              className={`${styles.stageLink} ${styles.stageLinkGreen}`}
            >
              <GoArrowUpRight color="#fff" />
            </a>
          </div>
          <div className={`${styles.stage} ${styles.l_gr}`}>
            <p className={styles.stageNumber}>4</p>
            <p className={styles.boldText}>4. стадия</p>
            <p className={styles.stageText}>
              Развития экспорта. Примерный срок: 1,5 года.
            </p>
            <a href="#" className={styles.stageLink}>
              <GoArrowUpRight color="#A8C686" />
            </a>
          </div>
        </div>
        <div className={styles.download}>
          <h4 className={styles.downloadTitle}>Хотите скачать документы?</h4>
          <div className={styles.downloadLinks}>
            <a href="#">
              <LuFileDown color="#0090FF" />
              <span>Меморандум</span>
            </a>
            <a href="#">
              <LuFileDown color="#0090FF" />
              <span>Инвест проект</span>
            </a>
            <a href="#">
              <LuFileDown color="#0090FF" />
              <span>Бизнес план</span>
            </a>
          </div>
          <button className={styles.registerButton}>
            Зарегистрироваться сейчас
          </button>
        </div>
      </section>
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
            <p className={styles.boldText}>PI</p>
            <p>(Profitability Index) - return on Investment Index</p>
          </div>
          <div className={styles.gr}>
            <span>PB</span>
            <p className={styles.bigText}>13</p>
            <p className={styles.boldText}>PB</p>
            <p>(Pay Back) - payback period of the project</p>
          </div>
          <div>
            <span>ARR</span>
            <p className={styles.bigText}>256,5%</p>
            <p className={styles.boldText}>ARR</p>
            <p>(Accounting rate of return) - investment efficiency ratio</p>
          </div>
          <div className={styles.l_gr}>
            <span>IRR</span>
            <p className={styles.bigText}>214%</p>
            <p className={styles.boldText}>IRR</p>
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
            <p className={styles.boldText}>MIRR</p>
            <p>
              (Modified internal rate of return) - a financial indicator that
              helps determine the attractiveness of investments.
            </p>
          </div>
          <div className={styles.l_gr}>
            <span>NPV</span>
            <p className={styles.bigText}>$42,2M</p>
            <p className={styles.boldText}>NPV</p>
            <p>
              (Net Present Value) - The coefficient helps to determine how much
              income you can expect in the future by investing in the project
              now
            </p>
          </div>
        </div>
      </section>
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
