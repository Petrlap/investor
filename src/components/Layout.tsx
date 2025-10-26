import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo.webp";
import { RiUserAddLine } from "react-icons/ri";
import { FiMenu, FiPhone } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import { BiCopy } from "react-icons/bi";

const Layout = () => {
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
          <RiUserAddLine size={24} color="#fff" />
        </button>
        <button>
          <FiMenu size={24} color="#000" />
        </button>
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
            <MdMailOutline color="#fff" />
            <FaTelegramPlane color="#555454" />
            <AiOutlineWhatsApp color="#555454" />
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
              Инвестировать <FaArrowRight color="#fff" />
            </button>
            <div className="footer-right__box">
              <div>
                <BiCopy color="#888" />
                <a href="mailto:Invest@comfortacorp.com">
                  Invest@comfortacorp.com
                </a>
              </div>
              <div>
                <FiPhone color="#A8C686" />
                <a href="tel:+18001234567">+1 800 123 4567</a>
              </div>
            </div>
            <div className="social-block__box mob">
              <MdMailOutline color="#fff" />
              <FaTelegramPlane color="#555454" />
              <AiOutlineWhatsApp color="#555454" />
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
