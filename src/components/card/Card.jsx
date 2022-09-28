import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  const article = props.article;
  const id = article?.id;
  const title = article?.title;
  const firstPara = article?.firstPara;
  const imageUrl = article?.imageUrl;
  const date = article?.dateObj?.toLocaleString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function handleClick() {
    navigate(`../article/${id}`);
  }
  function createMarkup() {
    return { __html: firstPara };
  }
  // useEffect(()=>{
  //     if (articles) document.querySelector('.article').innerHTML = articles[id - 1]?.html;
  // })


  return (
    <div className="my-5 py-4 card-wrapper">
      <h3 role="button" onClick={handleClick}>
        {title}
      </h3>
      <div onClick={handleClick}
           role='button'
        className="my-3 image-container w-100"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="my-3">{date}</div>

      <p className="card_p" dangerouslySetInnerHTML={createMarkup()} />

      <button className="btn btn-dark" onClick={handleClick}>
        Read Article
      </button>
    </div>
  );
}
