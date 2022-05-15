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
    })

    const projectSelected = props.search;
    //VARIABLE PARA GUARDAR LA URL DEL MODELO Y MOSTRARLO EN UN IFRAME
    const urlDefault = props.search.default_Route_3D;

    return (
        <div className='designProjectDetail'>
            {/* <h2>Project Detail</h2> */}
            {/* <div className="containerProjectDetail"> */}
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
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials,
    search: state.search.project
}))(ProjectDetail);