import React from "react";
import './card.css'
import { useNavigate} from "react-router-dom";

export default function Card(props) {
    const navigate = useNavigate()
    const article = props.article;
    const id = article?.id;
    const title = article?.title;
    const firstPara = article?.firstPara;
    const imageUrl = article?.image;
    const date = article?.dateObj?.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    function handleClick () {navigate(`../article/${id}`)}
    function createMarkup() {
        return {__html: firstPara};
    }
    // useEffect(()=>{
    //     if (articles) document.querySelector('.article').innerHTML = articles[id - 1]?.html;
    // })

    return (
        <div>
            <h3 onClick={handleClick}>{title}</h3>
            <img src={imageUrl} alt='blog-photo'/>
            <p dangerouslySetInnerHTML={createMarkup()}/>
            <div>{date}</div>
            <button onClick={handleClick}>Read Article</button>
        </div>
    )



}