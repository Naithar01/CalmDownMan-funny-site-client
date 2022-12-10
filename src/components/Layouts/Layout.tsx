import { Fragment } from "react";
import style from "../../styles/layouts/layout.module.css";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <Header />
      <div className={style.layout}>{children}</div>
    </Fragment>
  );
};

export default Layout;
