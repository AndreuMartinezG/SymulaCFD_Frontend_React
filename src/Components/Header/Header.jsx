import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from '../../img/Symula_Logo.png';
import { LOGOUT } from '../../Redux/types';

import './Header.css'

const Header = (props) => {

    let navigate = useNavigate();
    
    let name = props.credentials?.user.name;

    useEffect(() => {
        console.log(props.credentials.user)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })


    //FUNCION LOG OUT

    const logOut = () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });


        setTimeout(() => {
            navigate("/");
        }, 500);
    }

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
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{name}</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Contact</a></li>
                        <li><a className="dropdown-item" onClick={() => logOut()}>Log Out</a></li>
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