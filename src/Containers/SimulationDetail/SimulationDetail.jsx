import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './SimulationDetail.css'

const SimulationDetail = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)
        
    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        if (!props.credentials?.token) {
            navigate("/");
        }

    })
    const urlIndex = props.search.index_Route_3D;

    return (
        <div className='designSimulationDetail'>

            <div className="index3dContent">
                <div className="pasarelaPago">
                    <a className="btn btn-primary margenPago" href="https://buy.stripe.com/test_28o9Epcfg66e7sc3cd" role="button">Conceptual Simulation</a>
                    <a className="btn btn-primary margenPago" href="https://buy.stripe.com/test_5kA17T7Z01PYh2M9AC" role="button">Balanced Simulation</a>
                    <a className="btn btn-primary margenPago" href="https://buy.stripe.com/test_3cs9Ep6UWdyG9AkaEH" role="button">Accurate simulation</a>
                </div>
                <iframe className="pintar3DIndex" src={urlIndex}></iframe>
            </div>

        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials,
    search: state.search.project
}))(SimulationDetail);