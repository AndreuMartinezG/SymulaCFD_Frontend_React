import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { PROJECT_DETAIL } from '../../Redux/types'
import tunerViento from '../../img/Portada_Tunel_Viento.jpg';
import './Deskboard.css'

const Deskboard = (props) => {

    let navigate = useNavigate();

    //HOOKS
    const [projectsLoad, setProjectsLoad] = useState([]);


    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

        //Llamada al endpoint para obtener los proyectos del usuario
        getProjects();

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        if (!props.credentials?.token) {
            navigate("/");
        }
    })

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        console.log("He entrado en useEffect de Projects Load")
    }, [projectsLoad])

    let geometry_name = '';


    // ENVIO DE DATOS AL ENDPOINT DE CREAR PROYECTO
    const save = async () => {
        // Recoger datos y enviar al endpoint de crear proyecto
        try {

            let userId = props.credentials.user.id;
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
            let category = document.getElementById('category').value;
            let scale = document.getElementById('scale').value;

            //get input file
            let fileRaw = document.getElementById('file').files[0];

            console.log(fileRaw.name);

            let body = {
                user_id: userId,
                title: title,
                description: description,
                category: category,
                case: scale,
                geometry_name: fileRaw.name,
            }

            //header para registrar nuevo proyecto
            let token = props.credentials.token;
            let config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            //Enviar datos al endpoint de guardar proyecto
            let resultado = await axios.post('https://symula-cfd-backend.herokuapp.com/api/projects', body, config);

            let project_id = resultado.data.project.id;


            //Enviar datos al endpoint de stl

            let config_stl = {
                headers: {
                    "Content-Type": "application/sla",
                    "Accept": "application/json"
                }
            }
            console.log(userId, "Soy el userId")
            console.log(project_id, "Soy el project_id")
            console.log(geometry_name, "Soy el geometry_name")

            let stl_resultado = await axios.post(`https://17coe81mt4.execute-api.eu-west-3.amazonaws.com/v1/symula-test/${userId}-${project_id}-sim_body.stl`, fileRaw, config_stl);

            console.log(stl_resultado, "SOY RESULTADO DE STL");



            //Enviar datos al endpoint de crear geometria
            callEndpointGeometry(project_id, userId, scale);
        } catch (error) {
            console.log(error);
        }

    }


    // Funcion ENVIO DE DATOS AL ENDPOINT DE CREAR GEOMETRIA
    const callEndpointGeometry = async (project_id, userId, scale) => {

        try {

            let data = {
                project_id: project_id,
                user_id: userId,
                scale: scale,
                test: 'yes'
            }

            console.log(data)

            let resultado2 = await axios.post('https://69jkicnso8.execute-api.eu-west-3.amazonaws.com/dev', data);

            console.log(resultado2.data, "resultado de geometria")

            let strUrls = resultado2.data;

            let urls = strUrls.split(' ');

            console.log(urls, "urls")


            //Funcion para actualizar los campos de URL del proyecto
            updateProject(project_id, urls);

        } catch (error) {
            console.log(error);
        }
    }

    // Funcion PARA ACTUALIZAR LOS CAMPOS DE URL DEL PROYECTO
    const updateProject = async (project_id, urls) => {

        try {
            let id = project_id;

            let body = {
                index_Route_3D: urls[0],
                default_Route_3D: urls[1],
            }

            let config = {
                headers: {
                    'Authorization': `Bearer ${props.credentials.token}`
                }
            }

            let resultado = await axios.put(`https://symula-cfd-backend.herokuapp.com/api/projects/${id}/route_3D`, body, config);

            console.log(resultado, "resultado de update")

            window.location.reload();

        } catch (error) {

            console.log(error);

        }
    }


    //FUNCION PARA OBTENER LOS PROYECTOS DEL USUARIO

    const getProjects = async () => {

        try {


            let userId = props.credentials.user.id;

            //header for token
            let token = props.credentials.token;
            let config = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            let result = await axios.get(`https://symula-cfd-backend.herokuapp.com/api/projects/user/${userId}`, config);
            console.log(result.data.projects, "resultado de getProjects")
            //Guardar los proyectos en una variable

            setTimeout(() => {
                setProjectsLoad(result.data.projects);
                console.log(projectsLoad, "projectsLoad")
            }, 1000);

        } catch (error) {
            console.log(error);
        }

    }


    //FUNCION PARA GUARDAR EN REDUX EL PROYECTO SELECCIONADO
    const selectProject = (project) => {
        props.dispatch({ type: PROJECT_DETAIL, payload: project })

    }


    return (
        <div className='designDeskboard'>
            <h2 className='titleDeskBoard'>DESK BOARD</h2>

            {/* CONTAINER PARA EL MODAL */}
            <div className='containerModal'>
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
                                    <input className="form-control" type="file" id="file" name="myImage" accept=".stl" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => save()} data-bs-dismiss="modal" aria-label="Close">Save changes</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTAINER PARA LOS PROYECTOS */}
            <div className='containerProjects'>



                {/* PROYECTOS */}
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {
                        projectsLoad.map((project, index) =>
                            <div className="col" key={index}>
                                <div className="card card2" onClick={() => selectProject(project)}>
                                    <a href={`/projectdetail/${project.id}`}>
                                        <img src={tunerViento} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{project.title}</h5>
                                            <p className="card-text">{project.description}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default connect((state) => ({
    credentials: state.credentials,
}))(Deskboard);