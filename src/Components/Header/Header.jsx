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
    let isLogged = props.credentials?.token;

    useEffect(() => {


    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })


    //FUNCION LOG OUT

    const logOut = async () => {
        //Borrar de RDX las credenciales
        props.dispatch({ type: LOGOUT });

        try {

            await axios.post('https://symula-cfd-backend.herokuapp.com/api/logout');


        }
        catch (error) {
            console.log(error);
        }
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

            {/* EL USUARIO ESTA LOGUEADO */}
            {isLogged &&
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/deskboard">Deskboard</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{name}</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/profile">Profile</a></li>
                            <li><a className="dropdown-item" href="https://symulacfd.com/contacto/" target="blank">Contact</a></li>
                            <li><a className="dropdown-item" onClick={() => logOut()}>Log Out</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://symulacfd.com/" target="blank">About Us</a>
                    </li>
                </ul>
            }
            {/* EL USUARIO NO ESTA LOGUEADO */}

            {!isLogged &&
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://symulacfd.com/" target="blank">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Acces</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/register">Sign up</a></li>
                            <li><a className="dropdown-item" href="/login">Log in</a></li>
                        </ul>
                    </li>
                </ul>
            }
        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials,
}))(Header);