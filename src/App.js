import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NotFound from "./pages/not_found/NotFound";
import Articles from "./pages/articles/Articles";
import Article from "./pages/blog/Article";
import {useEffect, useState} from "react";
import getArticles from "./scripts/getArticles";
import Search from "./pages/search/Search";


function App() {
    const [articles, setArticles] = useState()
    const [searchResults, setSearchResults] = useState()
    useEffect(()=>{
        getArticles().then(setArticles).catch(console.error)
    },[])
    return (
        <>
            <Header articles={articles} setSearchResults={setSearchResults}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home articles={articles}/>}/>
                    <Route path="/articles" element={<Articles articles={articles}/>}/>
                    <Route path="/search" element={<Search foundArticles={searchResults}/>} />
                    <Route path="/article/:id" element={<Article articles={articles}/>}/>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
