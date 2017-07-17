import { h } from "preact";
import style from "./style";

const Section = props => {
  return (
    <section class={style.section}>
      {props.children}
    </section>
  );
};

export default Section;
