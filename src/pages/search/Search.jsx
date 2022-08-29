import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function Search(props) {
    return (
        <>
            <section>
                <h1>Search Results</h1>
            </section>
            <section>
                {props?.foundArticles?.map(a => <Card key={uuid()} article={a}/>)}
            </section>
        </>
    );
}