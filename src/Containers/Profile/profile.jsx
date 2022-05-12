import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
 
import './Profile.css'
 
import HeaderProfile from '../../Components/HeaderProfile/HeaderProfile';

const Profile = (props) => {
 
    let navigate = useNavigate();
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
 
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='designProfile'>
            <HeaderProfile/>
            <h2>{props.userData.user.firstName} {props.userData.user.lastName}</h2>
        </div>
    )
}
export default connect((state) => ({ 
    //variables de rdx a crear
}))(Profile);