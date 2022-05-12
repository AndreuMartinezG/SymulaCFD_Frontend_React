import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../img/Symula_Logo.png';

import './Header.css'

const Header = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        console.log(props.credentials.token, "token")

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })


    return (
        <div className='designHeader'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <img src={logo} alt="logo" className="logo" />
                </li>
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Projects</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">"NAME"</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Contact</a></li>
                        <li><a className="dropdown-item" href="#">Log Out</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>

            </ul>
        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials,
}))(Header);