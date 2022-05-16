import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment';

import './profile.css'

import HeaderProfile from '../../Components/HeaderProfile/HeaderProfile';


const Profile = (props) => {


    //HOOKS

    const [user, setUser] = useState({});

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)
        getUser();
    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)
        if (!props.credentials?.token) {
            navigate("/");
        }
        
    })

    useEffect(() => {
        //Se actualiza hook user
    }, [user])

    //FUNCION PARA REBIR LOS DATOS DEL USUARIO

    const getUser = async () => {
        try {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${props.credentials.token}`
                }
            }
            let res = await axios.get('https://symula-cfd-backend.herokuapp.com/api/me', config);
            console.log(res.data)
            setTimeout(() => {
                setUser(res.data);
            }, 2000);
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    //FUNCION PARA GUARDAR LOS CAMBIOS DEL PERFIL
    const submitChanges = async () => {

                    let name = document.getElementById('changeName').value;
                    let lastname = document.getElementById('changeLastname').value;
                    let email = document.getElementById('changeEmail').value;

                    console.log(name, lastname, email)

                    try {

                        let config = {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${props.credentials.token}`
                            }
                        }

                        let body = {
                            name,
                            lastname,
                            email
                        }

                        await axios.put(`https://symula-cfd-backend.herokuapp.com/api/user/${props.credentials.user.id}`, body, config);

                        getUser();

                    } catch (error) {
                        console.log(error)
                    }
                }

    return(
        <div className = 'designProfile' >
            <HeaderProfile />
            <h2>{user.name} {user.lastname}</h2>

            <div className="bodyProfile">
                <div className="userInfo">
                    <div className="cardUserInfo">
                        <h5>User Info</h5>
                        <br />
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Name : {user.name} </span>
                        </div>
                        <br />
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">LastName : {user.lastname} </span>
                        </div>
                        <br />
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Email :  {user.email} </span>
                        </div>
                        <br />
                        <div className="userShowInfo">
                            <span className="userShowInfoTitle">Account Created  : {moment(user.created_at).format('L')}  </span>
                        </div>
                    </div>
                </div>
                <div className="userChangeInfo">
                    <div className="cardUserChangeInfo">
                        <h5>Change Info</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="changeEmail" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                                <input type="name" className="form-control" id="changeName"></input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="exampleCheck1">LastName</label>
                                <input type="name" className="form-control" id="changeLastname"></input>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={() => submitChanges()}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default connect((state) => ({
    credentials: state.credentials
}))(Profile);