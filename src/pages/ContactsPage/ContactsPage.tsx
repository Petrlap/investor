import { BiCopy } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import styles from "./Contacts.module.css";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { IconWrapper } from "../../components/IconWrapper/IconWrapper";

const Contacts = () => {
  return (
    <section className={styles.contactsPage}>
      <div className={`${styles.mapBlcok} ${styles.desk}`}>
        <div className={styles.textBlcok}>
          <h1>Comforta International Corporation</h1>
          <p>Adress: 16192 Coastal Highway Lewes, Delaware 19958, USA</p>
          <div className={`${styles.buttonsBlcok} ${styles.desk}`}>
            <button>Написать Вотсап</button>
            <button className={styles.tg}>Написать Телеграм</button>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.953040945496!2d-75.2155818349487!3d38.764781051843656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b90d93fd3829%3A0x6bfd401d90b6d8f9!2s16192%20Coastal%20Hwy%2C%20Lewes%2C%20DE%2019958%2C%20USA!5e0!3m2!1sen!2sby!4v1759691213724!5m2!1sen!2sby"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        />
      </div>
      <div className={`${styles.mapBlcok} ${styles.mob}`}>
        <div className={styles.textBlcok}>
          <h1>Контакты</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.953040945496!2d-75.2155818349487!3d38.764781051843656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b90d93fd3829%3A0x6bfd401d90b6d8f9!2s16192%20Coastal%20Hwy%2C%20Lewes%2C%20DE%2019958%2C%20USA!5e0!3m2!1sen!2sby!4v1759691213724!5m2!1sen!2sby"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
          <p>Adress: 16192 Coastal Highway Lewes, Delaware 19958, USA</p>
        </div>
      </div>
      <div className={styles.contactsBlock}>
        <div>
          <div>
            <IconWrapper
              Icon={BiCopy}
              style={{ color: "#888", width: 18, height: 18 }}
            />
            <a href="mailto:Invest@comfortacorp.com">Invest@comfortacorp.com</a>
          </div>
          <div>
            <IconWrapper
              Icon={FiPhone}
              style={{ color: "#A8C686", width: 24, height: 24 }}
            />
            <a href="tel:+18001234567">+1 800 123 4567</a>
          </div>
        </div>
        <div>
          <div>
            <IconWrapper
              Icon={FiPhone}
              style={{ color: "#A8C686", width: 24, height: 24 }}
            />
            <a
              href="https://wa.me/18001234567"
              target="_blank"
              rel="noopener noreferrer"
            >
              +1 800 123 4567
            </a>
          </div>
          <div>&#128241; WhatsApp:</div>
        </div>
        <div>
          <div>
            <IconWrapper
              Icon={FaTelegramPlane}
              className={styles.tgIcon}
              style={{ color: "#fff" }}
            />
            <a
              href="https://t.me/comforta_invest"
              target="_blank"
              rel="noopener noreferrer"
            >
              @comforta_invest
            </a>
          </div>
          <div>&#128241; Telegram:</div>
        </div>
      </div>
      <div className={`${styles.buttonsBlock} ${styles.mob}`}>
        <button>Написать Вотсап</button>
        <button className={styles.tg}>Написать Телеграм</button>
      </div>
      <ContactForm />
    </section>
  );
};

export { Contacts };
