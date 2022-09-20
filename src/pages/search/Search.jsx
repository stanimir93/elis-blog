import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";
import SearchElement from "../../components/search-element/SearchElement";

export default function Search(props) {

    return (
        <>

            <section className='mb-4'>
                <h1>{'Results for ' + props.term}</h1>
            </section>
            <section className='mb-5 border-1'>

                <SearchElement articles={props?.articles} setSearchResults={props.setSearchResults}
                               searchVal={props.searchVal} setSearchVal={props.setSearchVal}/>
            </section>

            <section>
                {props?.foundArticles?.map(a => <Card key={uuid()} article={a}/>)}
                {!props?.foundArticles?.length && <p>Nothing Found!</p>}
            </section>
        </>
    );
}