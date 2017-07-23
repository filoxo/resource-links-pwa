import { h } from "preact";
import style from "./style";

const Header = props => {
  return (
    <header class={style.header}>
      <h1>
        {props.title}
      </h1>
      <div class={style.searchContainer}>
        <label htmlFor="search" class="sr">
          Search
        </label>
        <input
          class={style.search}
          id="search"
          type="text"
          placeholder="Search..."
          onInput={props.filter}
        />
      </div>
    </header>
  );
};

export default Header;
