import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, Checkbox, Typography, } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons'
//REDUX

import { connect } from 'react-redux'
import { LOGIN } from '../../Redux/types'

import './Login.css'

const { Title } = Typography;

const Login = (props) => {

    let navigate = useNavigate();

    //1-Hooks (equivalen al estado en los componentes de clase)

    // const [datosUsuario, setDatosUsuario] = useState({ email: "", password: "" });


    /////////////////////////////////////////////////////////////////////////////////////////////////

    const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

    const [formErrorMessage, setFormErrorMessage] = useState('')
    const [rememberMe, setRememberMe] = useState(rememberMeChecked)

    const handleRememberMe = () => {
        setRememberMe(!rememberMe)
    };

    const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

    ////////////////////////////////////////////////////////////////////////////////////////////////


    //Funciones handlers
    // const rellenarDatos = (e) => {
    //     setDatosUsuario({ ...datosUsuario, [e.target.name]: e.target.value })
    // };



    useEffect(() => {
        if (props.credentials?.token) {
            navigate("/");
        }
    })

    const login = async (dataToSubmit) => {

        try {

            //Me invento las credenciales

            let body = dataToSubmit

            console.log(body)

            let resultado = await axios.post("http://127.0.0.1:8000/api/login", body);

            console.log(resultado)
            //Cambiamos el valor del hook credenciales, por lo tanto se recargará el componente


            //Guardaríamos los datos en redux...

            props.dispatch({ type: LOGIN, payload: resultado.data });


            setTimeout(() => {
                navigate("/");
            }, 1500);



        } catch (error) {
            if (error.response.data.message === 'Invalid Email or Password') {
                alert('Invalid Email or Password')
                setTimeout(() => {
                    window.location.reload()
                },1000)
                navigate("/login")
            }
            console.log(error)

        }
    }


    return (
        <Formik
            initialValues={{
                email: initialEmail,
                password: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(4, 'Password must be at least 6 characters')
                    .required('Password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {

                setTimeout(() => {
                    let dataToSubmit = {
                        email: values.email,
                        password: values.password
                    };

                    login(dataToSubmit)
                }, 500);


            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                return (
                    <div className="app bg-color">

                        <Title level={1}>Log In</Title>
                        <hr />
                        <div className="loginForm">
                            <form onSubmit={handleSubmit} style={{ width: '350px' }}>

                                <Form.Item required>
                                    <UserOutlined />
                                    <Input
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.email && touched.email ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required>
                                    <LockOutlined />
                                    <Input
                                        id="password"

                                        placeholder="Enter your password"
                                        type="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.password && touched.password ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                </Form.Item>

                                {formErrorMessage && (
                                    <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                                )}

                                <Form.Item>
                                    <Checkbox className="checkIzq" id="rememberMe" onChange={handleRememberMe} checked={rememberMe} >Remember me</Checkbox>
                                    <a className="login-form-forgot" href="/reset_user" style={{ float: 'right' }}>
                                        forgot password
                                    </a>
                                    <div>
                                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ minWidth: '100%' }} disabled={isSubmitting} onSubmit={handleSubmit}>
                                            Log in
                                        </Button>
                                    </div>
                                    Or <a href="/register">register now!</a>
                                </Form.Item>
                            </form>
                        </div>
                    </div>
                );
            }}
        </Formik>

    )
}


export default connect((state) => ({
    credentials: state.credentials
}))(Login);

