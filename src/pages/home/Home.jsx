import React, { useEffect } from "react";
import "./home.css";

import SearchElement from "../../components/search-element/SearchElement";

export default function Home(props) {
  return (
    <div className=" width-content w-100">
      <section className="ratio ratio-16x9 w-100 homepage-img text-white">
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
          <p className="quote pb-1 pb-xl-3">
            One who expresses one’s self through dance is a dancer. One who
            expresses one’s self through a dancer is a dance teacher.
          </p>
          <p className="quote">
            Dance teacher; a multi-tasking, choreographing rock star who lives
            to inspire and loves to encourage. They are kind of a big deal
          </p>
        </div>
      </section>
      <div className="home_search p-5 d-flex flex-column align-items-center">
        {/*<p className='text-center fs-5'>Search</p>*/}
        <SearchElement
          articles={props?.articles}
          setSearchResults={props.setSearchResults}
          searchVal={props.searchVal}
          setSearchVal={props.setSearchVal}
        />
      </div>
    </div>
  );
}
