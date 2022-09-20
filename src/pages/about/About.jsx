import React from "react";
import Card from "../../components/card/Card";
import uuid from "react-uuid";

export default function About(props) {

    return (
        <div className='width-content'>
            <section>
                <h1>About Me</h1>
            </section>
            <section>
                <img className='about_img float-end' src='' alt='my photo'/>
                <p>Hi everyone and welcome to my blog! I am a MA Dance Education student, who loves dancing and dance
                    teaching. I am only 24, which keeps me at the beginning of my dance performing and teaching career.
                    Blogs are inspiring to me and so I decided to write my own to capture all the future adventures. I
                    really hope it will be similar to the ones of Raul Pacheco-Vega or Jessica Zeller. I know,
                    impossible...but they say ´never say never´!</p>
                <p>When I moved to England I went to a lively and sunny town in the south called Chichester. There I
                    studied my Bachelor's degree in Dance Performance. After that, it was time for London. In London, I
                    managed to get to London Studio Centre, where I am studying until now the previously mentioned
                    Masters in Dance Education.</p>
                <p>The last thing to know about me is that I teach dance, geography and czech language. And often I go
                    to dance myself to dance studios in London like Pineapple, Base or Studio 68.</p>
                <p>Oh yeah, and did I tell you I did a research project? About the outcomes you can read here!</p>
            </section>
        </div>
    );
}