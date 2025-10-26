import React, { ReactNode } from "react";
import styles from "./Description.module.css";
import img1 from "../../assets/products/img-1.webp";
import img2 from "../../assets/products/img-2.webp";
import img3 from "../../assets/products/img-3.webp";
import img4 from "../../assets/products/img-4.webp";
import img5 from "../../assets/products/img-5.webp";
import { GoArrowUpRight } from "react-icons/go";
import { LuFileDown } from "react-icons/lu";

interface WrapperProps {
  condition: boolean;
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ condition, children }) => {
  return condition ? (
    <div className={styles.WhiteBlock}>{children}</div>
  ) : (
    <>{children}</>
  );
};

export default function Description() {
  return (
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
      <Wrapper condition={window.innerWidth < 1023}>
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
      </Wrapper>
    </section>
  );
}
