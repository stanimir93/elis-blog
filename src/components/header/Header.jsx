import React, {useRef, useState} from "react";
import './header.css';
import {NavLink, useNavigate, useLocation} from "react-router-dom";
import SearchElement from "../search/SearchElement";

export default function Header(props) {

    return (
        <header>
            <img/>
            <nav>
                <ul>
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/articles'>ARTICLES</NavLink></li>
                    <li><SearchElement articles={props?.articles} setSearchResults={props.setSearchResults}/></li>
                </ul>
            </nav>
        </header>
    );
}