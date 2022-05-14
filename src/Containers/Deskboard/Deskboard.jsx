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

    const save = () => {
        //Recoger datos del formulario type file
        let formData = new FormData();
        formData.append('file', document.getElementById('file').files[0]);
        console.log(formData);
    }

    const convertBase64 = (file) => {
        Array.from(file).forEach(file => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                let base64 = reader.result;
                console.log(base64);
            }
        })

        //get data from inputGroupSelect03
        let categorySelected = document.getElementById('category');
        console.log(categorySelected.value);
    }

    return (
        <div className='designDeskboard'><h1>DESK BOARD</h1>

            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Project</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <div className="input-group mb-3">
                                <input type="text" className="form-control" aria-label="Title" aria-describedby="Title" />
                            </div>


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
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Select a file .stl</label>
                                <input className="form-control" type="file" id="file" name="myImage" accept=".stl" onChange={(e) => convertBase64(e.target.files)} />
                            </div>
                        </div>
                        *Each geometry to study will be considered as an independent project
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => save()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Segundo modal */}

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                New Project
            </button>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
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
                                <input type="text" className="form-control" aria-label="Title" aria-describedby="Title" />
                            </div>

                            {/* DESCRIPCION */}
                            <label htmlFor="basic-input" className="form-label">Description</label>
                            <div class="input-group">
                                <textarea class="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <br />
                            {/* CATEGORIA */}
                            <label htmlFor="basic-input" className="form-label">Category</label>
                            <div className="input-group mb-3">
                                <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
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
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel2">Load 3D model</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Select a file .stl</label>
                                <input className="form-control" type="file" id="file" name="myImage" accept=".stl" onChange={(e) => convertBase64(e.target.files)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">New Proyect</a>
            <div className="modal-dialog modal-xl">...</div>
        </div>
    )
}
export default connect((state) => ({
    //variables de rdx a crear
}))(Deskboard);