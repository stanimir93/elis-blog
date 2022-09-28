import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function Articles(props) {

    return (
        <div className='width-content'>

            <section className='mt-3'>
                <h1>Blog Posts</h1>
            </section>
            <section>
                {props?.articles?.map(a => <Card key={uuid()} article={a}/>)}
            </section>
        </div>
    );
}