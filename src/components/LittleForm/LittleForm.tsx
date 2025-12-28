import { useState } from "react";
import styles from "./LittleForm.module.css";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  agree: boolean;
};

export const LittleForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newValue =
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  
  return (
    <section className={styles.formBlock}>
      <div>
        <h3>
          Присоединяйтесь<br></br>к реальному бизнесу
        </h3>
        <p>
          Проект с готовым производством, открытой<br></br>моделью и прозрачной
          юридической структурой
        </p>
      </div>
      <form>
        <input type="tel" name="phone" placeholder="Ваш телефон" required />
        <button type="submit" className={styles.submitBtn}>
          Получить полный Бизнес план
        </button>
        <label className={styles.agreeRow}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className={styles.checkboxAgree}
          />
          <span>
            Согласен на обработку <a href="#">персональных данных</a>
          </span>
        </label>
      </form>
    </section>
  );
};
