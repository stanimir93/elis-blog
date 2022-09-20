import React from "react";
import './article.css';
import {useParams, useNavigate} from "react-router-dom";


export default function Article(props) {
    const navigation = useNavigate()
    const {articles} = props
    const {id} = useParams();
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

    return <>
        <div className='mb-3'>

        <button className='btn btn-link fs-3 p-0' onClick={() => navigation(-1)}><i className="bi bi-arrow-left"></i></button>
        </div>
        {articles && <div className='width-content' dangerouslySetInnerHTML={createMarkup()}></div>}
    </>;

}