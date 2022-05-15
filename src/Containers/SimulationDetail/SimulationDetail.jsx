import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
 
import './SimulationDetail.css'
 
const SimulationDetail = (props) => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='designSimulationDetail'></div>
    )
}
export default connect((state) => ({ 
    credentials: state.credentials,
    search: state.search.project
}))(SimulationDetail);