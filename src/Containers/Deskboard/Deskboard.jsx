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
    }

    return (
        <div className='designDeskboard'><h1>DESK BOARD</h1>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                            <input type="file" id="file" name="myImage" accept=".stl" onChange={(e) => convertBase64(e.target.files)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => save()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-dialog modal-xl">...</div>
        </div>
    )
}
export default connect((state) => ({
    //variables de rdx a crear
}))(Deskboard);