import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import NotFound from "./pages/not_found/NotFound";
import Articles from "./pages/articles/Articles";
import Article from "./pages/blog/Article";
import { useEffect, useState } from "react";
import getArticles from "./scripts/getArticles";
import Search from "./pages/search/Search";
import SideNav from "./components/sidenav/SideNav";
import Contact from "./pages/contact/Contact";
import Inspirations from "./pages/inpsirations/Inspirations";
import About from "./pages/about/About";

function App() {
  const [articles, setArticles] = useState();
  const [searchResults, setSearchResults] = useState();
  const [searchVal, setSearchVal] = useState("");
  const [term, setTerm] = useState("");

  const customSetSeachResults = (val) => {
    setSearchResults(val);
    setTerm(searchVal);
  };

  const location = useLocation();
  const homeLocation = location.pathname === "/";
  // const pageClassNames = homeLocation ? 'homepage-img ': '';
  const pageClassNames = '';
  useEffect(() => {
    getArticles().then(setArticles).catch(console.error);
  }, []);
  return (
    <div className="height-min-100">
      <Header className="bg-dark text-light" articles={articles} />
      <div className="d-lg-flex height-main position-relative">
        <SideNav className='bg-light' articles={articles} />
        {/*<main className={pageClassNames + 'p-5'}>*/}
        <main className={pageClassNames + "px-5  container-fluid pt-4"}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  articles={articles}
                  setSearchResults={customSetSeachResults}
                  searchVal={searchVal}
                  setSearchVal={setSearchVal}
                />
              }
            />
            <Route path="/about" element={<About articles={articles} />} />
            <Route
              path="/blog-posts"
              element={<Articles articles={articles} />}
            />
            <Route
              path="/article/:id"
              element={<Article articles={articles} />}
            />
            <Route
              path="/inspirations"
              element={<Inspirations foundArticles={searchResults} />}
            />
            <Route
              path="/contact"
              element={<Contact foundArticles={searchResults} />}
            />
            <Route
              path="/search"
              element={
                <Search
                  foundArticles={searchResults}
                  articles={articles}
                  setSearchResults={customSetSeachResults}
                  term={term}
                  searchVal={searchVal}
                  setSearchVal={setSearchVal}
                />
              }
            />
            <Route path={"*"} element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer articles={articles} />
    </div>
  );
}

export default App;
