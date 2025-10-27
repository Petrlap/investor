import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";
import { RiUserAddLine } from "react-icons/ri";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { BiCopy } from "react-icons/bi";
import { IconWrapper } from "../components/IconWrapper/IconWrapper";
import styles from "./Layout.module.css";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="logoDesc">Comforta International Corporation</div>
        <nav>
          <NavLink to="/" style={{ display: "none" }}>
            Главная
          </NavLink>
          <NavLink to="/about">О компании</NavLink>
          <NavLink to="/marketoverview">Обзор рынка</NavLink>
          <NavLink to="/responsibility">Соц Ответственность</NavLink>
          <NavLink to="/photoproject">Фото проекта</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
        </nav>
        <button className="user-add">
          <IconWrapper
            Icon={RiUserAddLine}
            size={24}
            className=""
            style={{ color: "#fff" }}
          />
        </button>
        <button onClick={toggleMenu} className={styles.burgerBtn}>
          <IconWrapper
            Icon={menuOpen ? FiX : FiMenu}
            size={28}
            style={{ color: menuOpen ? "#fff" : "#000" }}
          />
        </button>

        {/* Модалка меню */}
        <div
          className={`${styles.menuModal} ${
            menuOpen ? styles.menuModalOpen : ""
          }`}
          onClick={toggleMenu}
        >
          <div
            className={styles.menuContent}
            onClick={(e) => e.stopPropagation()}
          >
            <NavLink to="/about" onClick={toggleMenu}>
              О компании
            </NavLink>
            <NavLink to="/marketoverview" onClick={toggleMenu}>
              Обзор рынка
            </NavLink>
            <NavLink to="/responsibility" onClick={toggleMenu}>
              Соц Ответственность
            </NavLink>
            <NavLink to="/photoproject" onClick={toggleMenu}>
              Фото проекта
            </NavLink>
            <NavLink to="/faq" onClick={toggleMenu}>
              FAQ
            </NavLink>
            <NavLink to="/contacts" onClick={toggleMenu}>
              Контакты
            </NavLink>
          </div>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer>
        <div className="social-block">
          <NavLink to="/" className="logo-link">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="logoDesc">Comforta International Corporation</div>
          <div className="social-block__box desc">
            <IconWrapper
              Icon={MdMailOutline}
              className=""
              style={{ color: "#fff" }}
            />
            <IconWrapper
              Icon={FaTelegramPlane}
              className=""
              style={{ color: "#555454" }}
            />
            <IconWrapper
              Icon={AiOutlineWhatsApp}
              className=""
              style={{ color: "#555454" }}
            />
          </div>
        </div>
        <div className="footer-right">
          <nav>
            <NavLink to="/">О компании</NavLink>
            <NavLink to="/about">Обзор рынка</NavLink>
            <NavLink to="/marketoverview">Соц Ответственность</NavLink>
            <NavLink to="/responsibility">Фото проекта</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contacts">Контакты</NavLink>
          </nav>
          <div className="footer-right__buttons">
            <button>
              Инвестировать{" "}
              <IconWrapper
                Icon={FaArrowRight}
                className=""
                style={{ color: "#fff" }}
              />
            </button>
            <div className="footer-right__box">
              <div>
                <IconWrapper
                  Icon={BiCopy}
                  className=""
                  style={{ color: "#888" }}
                />
                <a href="mailto:Invest@comfortacorp.com">
                  Invest@comfortacorp.com
                </a>
              </div>
              <div>
                <IconWrapper
                  Icon={FiPhone}
                  className=""
                  style={{ color: "#A8C686" }}
                />
                <a href="tel:+18001234567">+1 800 123 4567</a>
              </div>
            </div>
            <div className="social-block__box mob">
              <IconWrapper
                Icon={MdMailOutline}
                className=""
                style={{ color: "#fff" }}
              />
              <IconWrapper
                Icon={FaTelegramPlane}
                className=""
                style={{ color: "#555454" }}
              />
              <IconWrapper
                Icon={AiOutlineWhatsApp}
                className=""
                style={{ color: "#555454" }}
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="/" target="_blank" rel="noopener noreferrer">
            Условия использования
          </a>
          <span>@2025 Comforta International Corporation</span>
          <a href="/" target="_blank" rel="noopener noreferrer">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </>
  );
};

export { Layout };
