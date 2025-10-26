import styles from "./Notes.module.css";
import { LuFileDown } from "react-icons/lu";

export default function Notes() {
  return (
    <section className={styles.notes}>
      <h2>Примечания по финансовому плану:</h2>
      <p>
        Для упрощения считали, что вся необходимая для проекта сумма будет
        доступна уже в первом квартале 2026 года; В нулевой период в течение 1,5
        лет, необходимых для запуска проекта, продукция будет производиться на
        сторонних производственных мощностях в Японии и Китае (контакты
        заключены);
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
            принятия решения о выборе страны нахождения нового производства, но
            показываем только один по наиболее перспективной стране.
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
            income you can expect in the future by investing in the project now
          </p>
        </div>
      </div>
    </section>
  );
}
