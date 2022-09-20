import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function Inspirations(props) {

    return (
        <div className='width-content'>
            <section>
                <h1>Inspirations</h1>
            </section>
            <section>
                {props?.articles?.map(a => <Card key={uuid()} article={a}/>)}
            </section>
        </div>
    );
}