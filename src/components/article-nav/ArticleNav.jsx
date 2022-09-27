import React from "react";
import "./article-nav.css";

export default function ArticleNav(props) {
  const subheadings = props.subheadings;

  return (
    <div className="article-nav">
      <ul>{subheadings && subheadings?.map((s) => <li key={s}>{s}</li>)}</ul>
    </div>
  );
}
