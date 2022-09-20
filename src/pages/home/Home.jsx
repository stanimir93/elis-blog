import React, {useEffect} from "react";
import './home.css';

import SearchElement from "../../components/search-element/SearchElement";

export default function Home(props) {

    return (
        <div className='d-flex flex-column justify-content-between '>
            <div className='row'>
                <section className='col-lg-6'> </section>
                <section className='home_quote col-lg-6 text-center text-md-start'>
                    <div className='d-md-flex flex-column align-content-end fs-5 px-4'>
                        <em className='mb-4'>One who expresses one’s self through dance is a dancer. One who expresses one’s self through a dancer is a dance teacher.</em>

                    <em>Dance teacher; a multi-tasking, choreographing rock star who lives to inspire and loves to
                        encourage. They are kind of a big deal</em>
                    </div>
                </section>
            </div>
            <div className='home_search p-5 d-flex flex-column align-items-center'>
                {/*<p className='text-center fs-5'>Search</p>*/}
                <SearchElement articles={props?.articles} setSearchResults={props.setSearchResults} searchVal={props.searchVal} setSearchVal={props.setSearchVal}/>
            </div>
        </div>
    );
}