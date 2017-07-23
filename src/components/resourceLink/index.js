import { h } from "preact";
import style from "./style";

const ResourceLink = ({ url, heading, description }) => {
  return (
    <div class={style.resource}>
      <a class={style.url} href={url} target="_blank" rel="noreferrer">
        {heading}
      </a>
      <div class={style.printMetadata}>
        <h3>
          {heading}
        </h3>
        <p>
          {url}
        </p>
      </div>
      {description &&
        <p class={style.description}>
          {description}
        </p>}
    </div>
  );
};

export default ResourceLink;
