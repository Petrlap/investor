import { useState } from "react";
import { RiTelegramLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import phone from "../../assets/phone.webp";
import styles from "./ContactForm.module.css";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  agree: boolean;
};

export const ContactForm: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(
    "telegram"
  );

  const handleSelectChannel = (channel: string) => {
    setSelectedChannel(channel);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Введите имя";
    if (!/^\+?[0-9\s()-]{7,15}$/.test(formData.phone))
      newErrors.phone = "Некорректный телефон";
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim()))
      newErrors.email = "Некорректный E-mail";
    if (!formData.agree)
      newErrors.agree = "Подтвердите согласие на обработку данных";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("✅ Отправка данных:", formData);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <p className={styles.formTitle}>Остались вопросы?</p>
        <p className={styles.formText}>
          Выберите удобный способ получения ответа:
        </p>
        <form onSubmit={handleSubmit} className={styles.contactForm} noValidate>
          <div className={styles.formLeft}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.invalid : ""}
                required
              />
              {errors.name && (
                <span className={styles.errorText}>{errors.name}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Ваш телефон"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? styles.invalid : ""}
                required
              />
              {errors.phone && (
                <span className={styles.errorText}>{errors.phone}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                name="email"
                placeholder="Ваша почта  E-mail"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.invalid : ""}
                required
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div>
          </div>

          <div className={styles.formRight}>
            <textarea
              name="message"
              placeholder="Ваш вопрос"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            />

            <div className={styles.buttonsRow}>
              <button
                type="button"
                className={`${styles.iconButton} ${
                  selectedChannel === "telegram" ? styles.active : ""
                }`}
                onClick={() => handleSelectChannel("telegram")}
                aria-label="Связаться в Telegram"
              >
                <RiTelegramLine size={20} />
              </button>

              <button
                type="button"
                className={`${styles.iconButton} ${
                  selectedChannel === "whatsapp" ? styles.active : ""
                }`}
                onClick={() => handleSelectChannel("whatsapp")}
                aria-label="Связаться в WhatsApp"
              >
                <RiWhatsappLine size={20} />
              </button>

              <button
                type="button"
                className={`${styles.iconButton} ${
                  selectedChannel === "email" ? styles.active : ""
                }`}
                onClick={() => handleSelectChannel("email")}
                aria-label="Связаться по Email"
              >
                <RiMailLine size={20} />
              </button>

              <button type="submit" className={styles.submitBtn}>
                Задать вопрос
              </button>
            </div>
            <label className={styles.agreeRow}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className={errors.agree ? styles.invalidCheckbox : ""}
              />
              <span>
                Согласен на обработку <a href="/">персональных данных</a>
              </span>
            </label>
          </div>

          {errors.agree && (
            <span className={styles.errorText}>{errors.agree}</span>
          )}
        </form>
      </div>
      <img src={phone} alt="Phone" />
    </div>
  );
};
