import { h } from "preact";
import style from "./style";

const Header = props => {
  return (
    <header class={style.header}>
      <h1>
        {props.title}
      </h1>
      <div class={style.searchContainer}>
        <input class={style.search} type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
