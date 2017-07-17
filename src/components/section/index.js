import { h } from "preact";
import style from "./style";

const Section = props => {
  return (
    <section class={style.section}>
      {props.heading &&
        <h2>
          {props.heading}
        </h2>}
      {props.children}
    </section>
  );
};

export default Section;
