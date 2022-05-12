import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Input, Button, } from 'antd';

import { connect } from 'react-redux';


const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const Register = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        if (props.credentials?.token) {
            navigate("/");
        }
    })


    const registrame = async (dataToSubmit) => {

        let body = dataToSubmit

        console.log(body)

        try {

            // let resultado = await axios.post("https://movie-db-geekshubs.herokuapp.com/usuarios", body);


            // if (resultado.data === "El usuario con ese e-mail ya existe en nuestra base de datos") {
            //     alert(resultado.data)

            // } else {
            //     alert("Usuario registrado con Exito")
            //     setTimeout(() => {
            //         navigate("/login");
            //     }, 500);
            // }

        } catch (error) {
            console.log(error);
        }
    }

    //RENDER

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    //const dispatch = useDispatch();
    return (

        <Formik
            initialValues={{
                nombre: '',
                apellido: '',
                email: '',
                edad: '',
                telefono: '',
                password: '',
                confirmPassword: ''
            }}

            validationSchema={Yup.object().shape({
                nombre: Yup.string()
                    .required('Se requiere Nombre'),
                apellido: Yup.string()
                    .required('Se requiere Apellido'),
                email: Yup.string()
                    .email('Email invalido')
                    .required('Se requiere Email'),
                edad: Yup.number()
                    .typeError('Debes especificar un numero')
                    .min(18, 'Edad minima 18')
                    .max(99, 'Edad maxima 99')
                    .required('Se requiere Edad'),
                telefono: Yup.string()
                    .matches(phoneRegExp, 'Telefono no valido')
                    .required('Se requiere tu Telefono'),
                password: Yup.string()
                    .min(4, 'La contraseña requiere 4 caracteres')
                    .required('Se requiere Contraseña'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Las Contraseñas deben coincidir')
                    .required('Se requiere validacion de Contraseña')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    let dataToSubmit = {

                        nombre: values.nombre,
                        apellido: values.apellido,
                        email: values.email,
                        edad: values.edad,
                        telefono: values.telefono,
                        password: values.password,
                    };

                    registrame(dataToSubmit)

                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                } = props;

                return (

                    <div className="designRegister">
                        <h1 className='h1Registro'>Registro</h1>

                        <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

                            <Form.Item required label="Nombre" hasFeedback validateStatus={errors.nombre && touched.nombre ? "error" : 'success'}>
                                <Input
                                    id="nombre"
                                    placeholder="Introduce tu nombre"
                                    type="text"
                                    value={values.nombre}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.nombre && touched.nombre ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.nombre && touched.nombre && (
                                    <div className="input-feedback">{errors.nombre}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Apellido" hasFeedback validateStatus={errors.apellido && touched.apellido ? "error" : 'success'}>
                                <Input
                                    id="apellido"
                                    placeholder="Introduce tu Apellido"
                                    type="text"
                                    value={values.apellido}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.apellido && touched.apellido ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.apellido && touched.apellido && (
                                    <div className="input-feedback">{errors.apellido}</div>
                                )}
                            </Form.Item>

                            <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                <Input
                                    id="email"
                                    placeholder="Introduce tu Email"
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

                            <Form.Item required label="Edad" hasFeedback validateStatus={errors.edad && touched.edad ? "error" : 'success'}>
                                <Input
                                    id="edad"
                                    placeholder="Introduce tu Edad"
                                    type="text"
                                    value={values.edad}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.edad && touched.edad ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.edad && touched.edad && (
                                    <div className="input-feedback">{errors.edad}</div>
                                )}

                            </Form.Item>

                            <Form.Item required label="Telefono" hasFeedback validateStatus={errors.telefono && touched.telefono ? "error" : 'success'}>
                                <Input
                                    id="telefono"
                                    placeholder="Introduce tu Telefono"
                                    type="text"
                                    value={values.telefono}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.telefono && touched.telefono ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.telefono && touched.telefono && (
                                    <div className="input-feedback">{errors.telefono}</div>
                                )}

                            </Form.Item>

                            <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>

                                <Input
                                    id="password"
                                    placeholder="Introduce tu Contraseña"
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

                            <Form.Item required label="Confirm" hasFeedback validateStatus={errors.confirmPassword && touched.confirmPassword ? "error" : 'success'}>
                                <Input
                                    id="confirmPassword"
                                    placeholder="Introduce confirmacion de Contraseña"
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                                    }
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <div className="input-feedback">{errors.confirmPassword}</div>
                                )}
                            </Form.Item>

                            <Form.Item className='floatLeft'{...tailFormItemLayout}>
                                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                    Enviar
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    );

}

export default connect((state) => ({
    credentials: state.credentials
}))(Register);