import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
 
import './Footer.css'
 
const Footer = (props) => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='designFooter'></div>
    )
}
export default connect((state) => ({ 
    //variables de rdx a crear
}))(Footer);