import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
 
import './SimulationDetail.css'
 
const SimulationDetail = (props) => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
        console.log(props.search, 'props')
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
    const urlIndex = props.search.index_Route_3D;
 
    return (
        <div className='designSimulationDetail'>
            <div className="pasarelaPago"></div>
            <iframe className="pintar3DIndex" src={urlIndex}></iframe>
        </div>
    )
}
export default connect((state) => ({ 
    credentials: state.credentials,
    search: state.search.project
}))(SimulationDetail);