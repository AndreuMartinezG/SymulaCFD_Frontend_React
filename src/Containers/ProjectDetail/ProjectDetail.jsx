import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './ProjectDetail.css'

const ProjectDetail = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)
        console.log(props, 'props')
    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        if (!props.credentials?.token) {
            navigate("/");
        }
    })

    const projectSelected = props.search;
    //VARIABLE PARA GUARDAR LA URL DEL MODELO Y MOSTRARLO EN UN IFRAME
    const urlDefault = props.search.default_Route_3D;


    //FUNCION PARA ELIMINAR PROYECTO
    const deleteProject = async () => {
        try {
            
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.credentials.token}`
                }
            }

            console.log(projectSelected.id)
            await axios.delete(`https://symula-cfd-backend.herokuapp.com/api/projects/${projectSelected.id}`, config);
            alert("Proyecto Eliminado con Exito")
            navigate("/deskboard");

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='designProjectDetail'>
            <h2 className='titleProjectDetail'>Project Detail</h2>
            <div className="containerProjectDetail">
                <div className="iframe3D">
                    <iframe className="pintar3D" src={urlDefault}></iframe>
                </div>
                <div className="datosProject">
                    <div className="card text-center">
                        
                        <div className="card-body">
                            <h5 className="card-title">About the Project</h5>
                            <hr></hr>
                            <br />
                            <p className="card-text"><b>Title: </b> {projectSelected.title}</p>
                            <p className="card-text"><b>Description: </b> {projectSelected.description}</p>
                            <p className="card-text"><b> Name: </b> {projectSelected.geometry_name}</p>
                            <p className="card-text"><b>Category: </b>{projectSelected.category}</p>
                            <br />
                            <a href={`/simulationdetail/${projectSelected.id}`} className="btn btn-primary">Finish Simulation</a>

                            <button type="button" onClick={()=>deleteProject()} className="btn btn-danger">Delete Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials,
    search: state.search.project
}))(ProjectDetail);