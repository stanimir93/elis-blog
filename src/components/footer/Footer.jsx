import React from "react";
import './footer.css';

export default function Footer(props) {
    return (
        <footer className={props.className + ' bg-dark p-3'}>
                <div
                    className='container-lg d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                    <span>Copy Link</span>
                    <address>
                        <ul className='d-flex fs-3'>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href=''><i
                                    className="bi bi-facebook"></i></a>
                            </li>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href=''><i
                                    className="bi bi-instagram"></i></a>
                            </li>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href=''><i
                                    className="bi bi-youtube"></i></a>
                            </li>
                            <li className='mx-3'>
                                <a className='btn btn-link p-1 fs-3' target='_blank' href=''><i
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