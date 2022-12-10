import { Link } from "react-router-dom";
import style from "../../styles/layouts/header.module.css";

const Header = () => {
  return (
    <header className={style.header_wrap}>
      {/* User -  */}
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
          <Link to="/">Logo</Link>
        </p>
      </div>

      {/* Route Nav */}
      <nav className={style.header_list_wrap}>
        <ul className={style.header_list}>
          <li>
            <div className="menu">
              <Link to="1">Posts</Link>
            </div>
          </li>
          <li>
            <div className="menu">
              <Link to="1">Posts</Link>
            </div>
          </li>
          <li>
            <div className="menu">
              <Link to="1">Posts</Link>
            </div>
          </li>
          <li>
            <div className="menu">
              <Link to="1">Posts</Link>
            </div>
          </li>
          <li>
            <div className="menu">
              <Link to="1">Posts</Link>
            </div>
          </li>
        </ul>
        <div className={style.report_menu}>
          <Link to="report">Report</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
