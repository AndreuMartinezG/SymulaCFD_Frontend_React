import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import {connect} from 'react-redux'
 
import './profile.css'
 
import HeaderProfile from '../../Components/HeaderProfile/HeaderProfile';

const Profile = (props) => {
 
    
    let navigate = useNavigate();
    let userName = props.credentials.user;
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidMount (montado)
    console.log(props.credentials.user)
    },[])
 
    useEffect(()=>{
    //UseEffect equivalente a componentDidUpdate (actualizado)
 
    },)
 
 
    return (
        <div className='designProfile'>
            <HeaderProfile/>
            <h2>{userName.name} {userName.lastname}</h2>

            <div className="bodyProfile">
                <div className="userInfo">USER INFO</div>
                <div className="userChangeInfo">Change Info</div>
            </div>
        </div>
    )
}
export default connect((state) => ({ 
    credentials: state.credentials
}))(Profile);