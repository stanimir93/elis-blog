import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function Home(props) {

    return (
        <>
            <section>
                <h1>Articles</h1>
            </section>
            <section>
                {props?.articles?.map(a => <Card key={uuid()} article={a}/>)}
            </section>
        </>
    );
}