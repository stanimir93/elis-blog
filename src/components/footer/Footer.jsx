import React from "react";
import './footer.css';

export default function Footer(props) {
    return (
        <footer className={props.className + ' bg-dark p-3'}>
                <div
                    className='container-lg d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                    <button className='bg-transparent border-0' title='Copy website link' onClick={()=>{navigator.clipboard.writeText(window.location.href)}}>Website Link</button>
                    <address>
                        <ul className='d-flex fs-3'>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href='https://www.facebook.com/elis.sperkova'><i
                                    className="bi bi-facebook"></i></a>
                            </li>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href='https://www.instagram.com/elissperkova/'><i
                                    className="bi bi-instagram"></i></a>
                            </li>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href='https://www.youtube.com/channel/UCyg1B3e1Qye87P0SIW39fvQ/videos'><i
                                    className="bi bi-youtube"></i></a>
                            </li>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href='mailto:elis.sperkova@gmail.com'><i
                                    className="bi bi-envelope"></i></a>
                            </li>
                            <li className='link mx-3'>
                                <button className='btn btn-link p-1 fs-3' onClick={() => window.print()}><i
                                    className="bi bi-printer"></i></button>
                            </li>
                        </ul>
                    </address>
            </div>
        </footer>
    );
}