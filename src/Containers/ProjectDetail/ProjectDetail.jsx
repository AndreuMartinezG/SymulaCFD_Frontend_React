import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './ProjectDetail.css'

const ProjectDetail = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)
        console.log(props.search.default_Route_3D, 'props')
    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
    })

    const urlDefault = props.search.default_Route_3D;

    return (
        <div className='designProjectDetail'>
            <div className="iframe3D">
                <iframe src={urlDefault} width="100%" height="100%"></iframe>
            </div>
            <div className="datosProject">
                sdf
            </div>
        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials,
    search: state.search.project
}))(ProjectDetail);