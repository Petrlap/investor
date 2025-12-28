import styles from "./AboutPage.module.css";
import logo from "../../assets/logo.webp";
import banner from "../../assets/company/banner.webp";
import img1 from "../../assets/company/human-1.webp";
import img2 from "../../assets/company/human-2.webp";
import img3 from "../../assets/company/human-3.webp";
import img4 from "../../assets/company/human-4.webp";
import img5 from "../../assets/company/human-5.webp";
import { IconWrapper } from "../../components/IconWrapper/IconWrapper";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <>
      <section className={styles.headBlock}>
        <div>
          <h1>О компании</h1>
          <p className={styles.desk}>
            Наша компания зарегистрирована 21 августа 2024 года в штате Делавэр.
            Пока нас всего 5 человек. Средний возраст – около 46 лет.
          </p>
        </div>
        <img src={banner} alt="Banner" />
        <p className={styles.mob}>
          Наша компания зарегистрирована 21 августа 2024 года в штате Делавэр.
          Пока нас всего 5 человек. Средний возраст – около 46 лет.
        </p>
      </section>
      <section className={styles.cardsBlock}>
        <div className={`${styles.cardsBlockItem} ${styles.green}`}>
          <p className={styles.grTitle}>Наша команда</p>
          <p className={styles.grText}>
            Это описание для блока команды, можно рассказать о проектах которые
            уже были созданы этой командой в кратце
          </p>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.cardsBlockItem}>
          <img src={img1} className={styles.human} alt="Human 1" />
          <p>Имя Фамилия Отчество</p>
          <p className={styles.littleText}>
            Краткое описание должностных обязанностей но очень желательно не
            более чем в 3 строки
          </p>
        </div>
        <div className={styles.cardsBlockItem}>
          <img src={img2} className={styles.human} alt="Human 2" />
          <p>Имя Фамилия Отчество</p>
          <p className={styles.littleText}>
            Краткое описание должностных обязанностей но очень желательно не
            более чем в 3 строки
          </p>
        </div>
        <div className={styles.cardsBlockItem}>
          <img src={img3} className={styles.human} alt="Human 3" />
          <p>Имя Фамилия Отчество</p>
          <p className={styles.littleText}>
            Краткое описание должностных обязанностей но очень желательно не
            более чем в 3 строки
          </p>
        </div>
        <div className={styles.cardsBlockItem}>
          <img src={img4} className={styles.human} alt="Human 4" />
          <p>Имя Фамилия Отчество</p>
          <p className={styles.littleText}>
            Краткое описание должностных обязанностей но очень желательно не
            более чем в 3 строки
          </p>
        </div>
        <div className={styles.cardsBlockItem}>
          <img src={img5} className={styles.human} alt="Human 5" />
          <p>Имя Фамилия Отчество</p>
          <p className={styles.littleText}>
            Краткое описание должностных обязанностей но очень желательно не
            более чем в 3 строки
          </p>
        </div>
      </section>
      <section className={styles.onlyText}>
        <h2>С момента создания и по настоящее время мы:</h2>
        <ul>
          <li>- разработали и зарегистрировали товарный знак,</li>
          <li>
            - разработали дизайн линеек продукции, которые планируем выпускать
            сразу после начала работы,
          </li>
          <li>
            - провели изучение технологии производства различных гигиенических
            изделий ведущими мировыми производителями,
          </li>
          <li>
            - изучили основных производителей продукции по традиционной
            технологии и основные мировые торговые марки,
          </li>
          <li>
            - изучали особенности выхода на рынок и продвижения наиболее
            известных торговых марок гигиенических товаров,
          </li>
          <li>- изучили производителей оборудования и их предложения,</li>
          <li>
            - изучили оборудование, необходимое для изготовления упаковки, а
            также сырья для него,
          </li>
          <li>
            - прорабатывали с потенциальными партнёрами нашу инновационную
            технологию сырья для наполнения гигиенических изделий,
          </li>
          <li>
            - производили изучение и анализ рынков сбыта некоторых стран
            (ёмкость, динамика, конкуренция, цены, стоимость ресурсов, налоговая
            нагрузка, барьеры входа и другое), наиболее перспективных для
            размещения производства и экспорта,
          </li>
          <li>- изучали и рассчитывали транспортную логистику,</li>
          <li>- начали делать web-сайт,</li>
          <li>
            - изучали особенности продаж и продвижения продукции в отдельных
            потенциально интересных странах (каналы продаж, условия входа и
            развития продаж, условия и стоимость продвижения и другое),
          </li>
          <li>
            - производили сравнительное бизнес-планирование по наиболее
            перспективным странам,
          </li>
          <li>
            - изучали варианты строительства и присоединения коммуникаций к
            планирующейся фабрике.
          </li>
        </ul>
      </section>
      <section className={styles.stagesBlock}>
        <p>
          Иначе говоря, мы уже больше года работаем в этом направлении и
          полностью погрузились в данную тему. На основании всей изученной
          информации мы с полной ответственностью считаем этот проект:
        </p>
        <div className={styles.stages}>
          <div className={styles.stage}>
            <p className={styles.stageNumber}>1</p>
            <p className={styles.boldText}>Бесрисковым</p>
            <p className={styles.stageText}>
              Безрисковый запуск на основе года исследований и точных расчётов
            </p>
            <a href="#" className={`${styles.stageLink} ${styles.stageLinkGr}`}>
              <IconWrapper
                Icon={GoArrowUpRight}
                className=""
                style={{ color: "#fff" }}
              />
            </a>
          </div>
          <div className={`${styles.stage} ${styles.l_gr}`}>
            <p className={styles.stageNumber}>2</p>
            <p className={styles.boldText}>Прибыльным</p>
            <p className={styles.stageText}>
              Продуманная модель с высокой маржинальностью и устойчивым спросом
            </p>
            <a href="#" className={styles.stageLink}>
              <IconWrapper
                Icon={GoArrowUpRight}
                className=""
                style={{ color: "#A8C686" }}
              />
            </a>
          </div>
          <div className={`${styles.stage} ${styles.l_bl}`}>
            <p className={styles.stageNumber}>3</p>
            <p className={styles.boldText}>Масштабируемым</p>
            <p className={styles.stageText}>
              Масштабируемость бизнеса за счёт универсального подхода к рынкам
            </p>
            <a
              href="#"
              className={`${styles.stageLink} ${styles.stageLinkGreen}`}
            >
              <IconWrapper
                Icon={GoArrowUpRight}
                className=""
                style={{ color: "#fff" }}
              />
            </a>
          </div>
          <div className={`${styles.stage} ${styles.l_gr}`}>
            <p className={styles.stageNumber}>4</p>
            <p className={styles.boldText}>Перспективным</p>
            <p className={styles.stageText}>
              Стратегический рост на годы вперёд в быстрорастущем сегменте
            </p>
            <a href="#" className={styles.stageLink}>
              <IconWrapper
                Icon={GoArrowUpRight}
                className=""
                style={{ color: "#A8C686" }}
              />
            </a>
          </div>
        </div>
        <div className={styles.greenBlock}>
          <p>
            Основания нашего оптимизма строятся на глобальных исследованиях,
            часть данных из которых Вы можете найти в разделе
          </p>
          <div>
            <span>«Маркетинговое исследование»</span>
            <p>
              Всю деятельность мы производим на собственные средства, которые
              были заработаны в производственных и консалтинговых проектах.
            </p>
          </div>
        </div>
        <div className={styles.buttonBlock}>
          <span>Давайте сотрудничать</span>
          <button>Получить полный Бизнес план</button>
          <p>02 места для инвесторов</p>
        </div>
      </section>
    </>
  );
};

export { About };
