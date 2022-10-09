import React, { useEffect } from "react";
import "./home.css";

import SearchElement from "../../components/search-element/SearchElement";

export default function Home(props) {
  return (
    <div className="homepage width-content w-100 m-auto m-lg-0">
      <section className="  text-white ratio ratio-4x3 homepage-img">
        <div className="d-flex flex-column justify-content-end align-items-center p-5">
          <p className="quote pb-1 pb-xl-3">
            One who expresses one’s self through dance is a dancer. One who
            expresses one’s self through a dancer is a dance teacher.
          </p>
          <p className="quote">-unknown-</p>
          <div className="home_search my-lg-5 py-md-1 max-width-450">
            {/*<p className='text-center fs-5'>Search</p>*/}
            <SearchElement
              articles={props?.articles}
              setSearchResults={props.setSearchResults}
              searchVal={props.searchVal}
              setSearchVal={props.setSearchVal}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
