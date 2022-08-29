import React, {useEffect} from "react";
import './home.css';
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function Home(props) {

    return (
        <>
            <section>
            <h1>Eliska Sperkova's Dance Blog</h1>
            <p>Let's learn about dance!</p>
            </section>
            <section>
                {props?.articles?.map(a => <Card key={uuid()} article={a}/>)}
            </section>
        </>
    );
}