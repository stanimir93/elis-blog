import React from "react";
import './article.css';
import {useParams, useNavigate} from "react-router-dom";

export default function Article(props) {
    const {articles} = props
    const { id } = useParams();
    const navigate = useNavigate()
    let html
    if (articles) html = articles[id - 1]?.html;
    if (articles && !articles[id - 1]?.html) navigate('/not-found')

    function createMarkup() {
        return {__html: html};
    }
    // useEffect(()=>{
    //     if (articles) document.querySelector('.article').innerHTML = articles[id - 1]?.html;
    // })

    return articles && <div dangerouslySetInnerHTML={createMarkup()} />;

}