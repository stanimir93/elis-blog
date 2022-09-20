import './searchelement.css'
import React, {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export default function SearchElement(props) {
    const searchVal = props.searchVal;
    const setSearchVal= props.setSearchVal
    const navigate = useNavigate()
    const location = useLocation();
    const search = useRef(null)

    // const location = useLocation()
    const {articles, setSearchResults} = props;

    function checkKey(ev) {
        if (ev.code === 'Enter') onSearch();
    }

    function onSearch() {
        if (!searchVal) return;
        const term = searchVal;
        let searchResults = articles.map( a => {
            const firstPara = searchHTML(a, term);
            if (!firstPara) return null;
            const id = a.id;
            const title = a.title;
            const imageUrl = a?.image;
            const dateObj = a?.dateObj;
            return {id, firstPara, title, imageUrl, dateObj }
        })
        searchResults = searchResults.filter(r => r !== null);
        setSearchResults(searchResults);
        if(location.pathname !== '/search') navigate('../search');
        search.current.valua = '';



        function searchHTML(article, term){
            let match = ''
            let text = ''; // to store all the text on the article
            const wrapper = document.createElement('div');
            wrapper.innerHTML = article.html;

            // get the text content of the article
            if (!window.memoedArticles) window.memoedArticles = [];
            if (!window.memoedArticles['article' + article.id])  {
                const walker = document.createTreeWalker(wrapper, NodeFilter.SHOW_TEXT);
                let node;
                do {
                    if (node) text += node.textContent.trim();
                    node = walker.nextNode();
                } while(node);
                window.memoedArticles['article' + article.id] = text
            }
            else text =  window.memoedArticles['article' + article.id];
            // search-element text
            const index = text.toLowerCase().indexOf(term.toLowerCase())
            if (index > 0) {
                text = text.substring(index, index + 200);
                const text1 = '<mark>' + text.substring(0, term.length) + '</mark>';
                const text2 = text.substring(term.length)
                match ='...' + text1 + text2 + '...';
            }
            return match;
        }
    }
    function onSearchInput(ev) {
        setSearchVal(ev.target.value)
        // if (location.pathname.includes('search-element')) onSearch();
    }


    useEffect(()=>{
        document.addEventListener('keyup', ev=>console.log)
        // return document.remove
    })
    return (
        <span className='search-element d-flex align-items-center'>
            {/*<p className='text-center fs-5'>Search</p>*/}
            <input className='rounded me-2' ref={search} onKeyUp={checkKey} type='text' value={searchVal} placeholder='search term' onChange={onSearchInput}/>
            <button className='btn btn-dark' onClick={onSearch}>Search</button>
        </span>
    )
}