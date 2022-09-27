import React, { useRef, useState } from "react";
import "./header.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import SearchElement from "../search-element/SearchElement";

export default function Header(props) {
  return (
    <header className={props.className + " p-4 pt-5"}>
      <div>
        <h2 className="text-center fs-1">Eliska Sperkova</h2>
        <p className="text-center">Sharing educational ideas in a simple way</p>
        {/*<li className='d-flex flex-row-reverse w-100 container-lg'><NavLink to='/blog-posts'>Dance Blog</NavLink></li>*/}
        <li className="d-flex flex-row-reverse w-100 container-lg">
          <em className="px-4">My Dance Blog</em>
        </li>
      </div>
    </header>
  );
}
