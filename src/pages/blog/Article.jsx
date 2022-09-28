import React from "react";
import "./article.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ArticleNav from "../../components/article-nav/ArticleNav";

export default function Article(props) {
  const navigation = useNavigate();
  const { articles } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  let html;
  if (articles) html = articles[id - 1]?.html;
  if (articles && !articles[id - 1]?.html) navigate("/not-found");

  function createMarkup() {
    return { __html: html };
  }

  let subheadings;
  if (articles) subheadings = articles[id - 1]?.subheadings;
  console.log(subheadings);

  setTimeout(() => {
    const hash = window.location.hash.substring(1);
    if (hash) document.getElementById(hash)?.scrollIntoView();
  }, 0);

  return (
    <div className="width-content">
      <div className="py-1 mb-4 back-btn-article d-flex align-items-center border-bottom border-1">
        <button
          className="btn btn-link fs-3 p-0"
          onClick={() => navigation(-1)}
        >
          <i className="bi bi-arrow-left"></i>
        </button>
      </div>
      {articles && (
        <div
          className="width-content"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
      )}
      {/* <ArticleNav subheadings={subheadings} /> */}
    </div>
  );
}
