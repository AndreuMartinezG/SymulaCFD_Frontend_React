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
                name: '',
                lastname: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}

            validationSchema={Yup.object().shape({
                name: Yup.string()
                    .required('Name is required'),
                lastname: Yup.string()
                    .required('Last name is required'),
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(4, 'Password must be at least 4 characters')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {

                    let dataToSubmit = {

                        name: values.name,
                        lastname: values.lastname,
                        email: values.email,
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
                        <h1 className='h1Registro'>Register</h1>
                        <div className="formRegister">
                            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

                                <Form.Item required label="Name" hasFeedback validateStatus={errors.name && touched.name ? "error" : 'success'}>
                                    <Input
                                        id="name"
                                        placeholder="Name"
                                        type="text"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.name && touched.name ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.name && touched.name && (
                                        <div className="input-feedback">{errors.name}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="lastname" hasFeedback validateStatus={errors.lastname && touched.lastname ? "error" : 'success'}>
                                    <Input
                                        id="lastname"
                                        placeholder="lastname"
                                        type="text"
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={
                                            errors.lastname && touched.lastname ? 'text-input error' : 'text-input'
                                        }
                                    />
                                    {errors.lastname && touched.lastname && (
                                        <div className="input-feedback">{errors.lastname}</div>
                                    )}
                                </Form.Item>

                                <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                                    <Input
                                        id="email"
                                        placeholder="Email"
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

                                <Form.Item required label="Password" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>

                                    <Input
                                        id="password"
                                        placeholder="Password"
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
                                        placeholder="Confirm Password"
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
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );

}

export default connect((state) => ({
    credentials: state.credentials
}))(Register);