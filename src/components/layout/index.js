import { h, Component } from "preact";
import style from "./style";

const Layout = props => {
  return (
    <main class={style.layout}>
      {props.children}
    </main>
  );
};

export default Layout;
