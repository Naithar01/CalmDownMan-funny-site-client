import { Link } from "react-router-dom";
import style from "../../styles/layouts/header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineArrowDown } from "react-icons/ai";

const Header = () => {
  const ToggleBtnHandler = () => {
    const nav = document.querySelector(`.${style.header_list_wrap}`);
    const background = document.querySelector(`.${style.background}`);

    if (nav && background) {
      const nav_active_id = nav.getAttribute("id");

      if (nav_active_id) {
        nav.removeAttribute("id");
        background.removeAttribute("id");
      } else {
        nav.setAttribute("id", `${style.header_nav_active}`);
        background.setAttribute("id", `${style.active}`);
      }
    }

    return;
  };

  return (
    <header className={style.header_wrap}>
      {/* Mobile Header Toggle Button */}
      <div className={style.header_toggleBtn} onClick={ToggleBtnHandler}>
        <GiHamburgerMenu />
      </div>

      {/* User */}
      <div className={style.header_user}>
        <ul>
          <li>
            <Link to="1">Register</Link>
          </li>
          <li>
            <Link to="2">Login</Link>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className={style.header_logo}>
        <p>
          <Link to="/">하하</Link>
        </p>
      </div>

      {/* Route Nav */}
      <nav className={style.header_list_wrap}>
        <div className={style.header_list_nav_wrap}>
          <ul className={style.header_list_mypage}>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="">Register</Link>
            </li>
          </ul>
          <ul className={style.header_list}>
            <li>
              <div className="menu">
                <Link to="/TEST%20CATEGORY%202">Category1</Link>
                <div>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </li>
            <li>
              <div className="menu">
                <Link to="1">Category2</Link>
                <div>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </li>
            <li>
              <div className="menu">
                <Link to="1">Category3</Link>
                <div>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </li>
            <li>
              <div className="menu">
                <Link to="1">Category4</Link>
                <div>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </li>
            <li>
              <div className="menu">
                <Link to="1">Category5</Link>
                <div>
                  <AiOutlineArrowDown />
                </div>
              </div>
            </li>
          </ul>
          <div className={style.report_menu}>
            <Link to="report">Report</Link>
          </div>
        </div>
      </nav>
      <div className={style.background} onClick={ToggleBtnHandler}></div>
    </header>
  );
};

export default Header;
