import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './Deskboard.css'

const Deskboard = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        // if (!props.credentials?.token) {
        //     navigate("/");
        // }
    })

    let geometry_name = '';
    let base64Result = '';


    // ENVIO DE DATOS AL ENDPOINT DE CREAR PROYECTO

    const save = async () => {
        // Recoger datos y enviar al endpoint de crear proyecto

        let userId = props.credentials.user.id;
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;
        let category = document.getElementById('category').value;
        let scale = document.getElementById('scale').value;

        let body = {
            user_id: userId,
            title: title,
            description: description,
            category: category,
            case: scale,
            geometry_name: geometry_name,
        }

        //header for token
        let token = props.credentials.token;
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`   
            }
        }

        //Enviar datos al endpoint
        let resultado = await axios.post('http://localhost:8000/api/projects', body, config);

        let project_id = resultado.data.project.id;
        console.log(project_id)

        //Enviar datos al endpoint de crear geometria
        let geometry = {
            project_id: project_id,
            user_id: userId,
            stl: base64Result,
            scale: scale,
        }
        console.log(geometry)

        let resultado2 = await axios.post('https://69jkicnso8.execute-api.eu-west-3.amazonaws.com/dev', geometry, config);

        console.log(resultado2)

    }

    

    // FUNCION PARA RECOGER LOS DATOS DEL MODAL
    const convertBase64 = (file) => {
        geometry_name = file[0].name;
        Array.from(file).forEach(file => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let arrayAux = [];
                let base64 = reader.result;
                arrayAux = base64.split(',');
                base64Result = arrayAux[1];
            }
        })
    }

    return (
        <div className='designDeskboard'><h2>DESK BOARD</h2>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalDatosProyecto">
                New Project
            </button>

            {/* MODAL DE DATOS DEL PROYECTO */}

            <div className="modal fade " id="modalDatosProyecto" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Project Data</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* TITULO */}
                            <label htmlFor="basic-input" className="form-label">Title</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id='title' aria-label="Title" aria-describedby="Title" />
                            </div>

                            {/* DESCRIPCION */}
                            <label htmlFor="basic-input" className="form-label">Description</label>
                            <div className="input-group">
                                <textarea className="form-control" aria-label="With textarea" id='description'></textarea>
                            </div>
                            <br />

                            {/* CATEGORIA */}
                            <label htmlFor="basic-input" className="form-label">Category</label>
                            <div className="input-group mb-3">
                                <select className="form-select" id="category" aria-label="Example select with button addon">
                                    <option value="Aeroespacial">Aeroespacial</option>
                                    <option value="Automoción">Automoción</option>
                                    <option value="Validación">Validación</option>
                                    <option value="Hobby">Hobby</option>
                                    <option value="Profesional">Profesional</option>
                                    <option value="Estudiante">Estudiante</option>
                                    <option value="Formación">Formación</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL DE CARGA DE MODELO 3D Y CASE */}
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Load 3D model</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            {/* Scale */}
                            <label htmlFor="basic-input" className="form-label">Scale</label>
                            <div className="input-group mb-3">
                                <select className="form-select" id="scale" aria-label="Example select with button addon">
                                    <option value="m">m</option>
                                    <option value="mm">mm</option>

                                </select>
                            </div>

                            {/* CARGA DE MODELO 3D */}
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Select a file .stl</label>
                                <input className="form-control" type="file" id="file" name="myImage" accept=".stl" onChange={(e) => convertBase64(e.target.files)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={() => save()} data-bs-dismiss="modal" aria-label="Close">Save changes</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
}))(Deskboard);