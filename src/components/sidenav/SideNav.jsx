import "./sidenav.css";
import React from "react";
import { NavLink } from "react-router-dom";
// import SearchElement from "../search-element/SearchElement";

export default function SideNav(props) {
  return (
    <aside
      className={
        props.className + " " + "bg-light d-flex justify-content-center py-2"
      }
    >
      <img />
      <nav className="">
        <ul className=" pt-3 sticky-top text-center text-md-start">
          {/* <li className="mb-4">
            <strong className="text-dark text-underline">
              Eliska Sperkova
            </strong>
          </li> */}
          <li className="mb-2 mb-sm-3 mb-md-4">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="my-2 my-sm-3 my-md-4">
            <NavLink to="/about">ABOUT ME</NavLink>
          </li>
          <li className="my-2 my-sm-3 my-md-4">
            <NavLink to="/blog-posts">BLOG POSTS</NavLink>
          </li>
          <li className="my-2 my-sm-3 my-md-4">
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          {/*<li className'dropdown-item><SearchElement articles={props?.articles} setSearchResults={props.setSearchResults}/></li>*/}
        </ul>
      </nav>
    </aside>
  );
}
