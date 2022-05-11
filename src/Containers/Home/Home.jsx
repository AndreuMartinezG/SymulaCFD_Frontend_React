import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './Home.css'

const Home = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        //UseEffect equivalente a componentDidMount (montado)

    }, [])

    useEffect(() => {
        //UseEffect equivalente a componentDidUpdate (actualizado)

    })


    return (
        <div className='designHome'>
            <div className="cardHome">
                <h1 className='h1Home'>Wellcome to Simula CFD</h1>
                <div class="card w-20 cardBody">
                    <div class="card-body ">
                        <h5 class="card-title">User access</h5>
                        <p class="card-text">Identify yourself on the platform to continue : </p>
                        <div className="optionHome">
                            <a href="#" class="btn btn-primary">Sign up</a>
                            <div className="spaceHomeAcces">or</div>
                            <a href="#" class="btn btn-primary">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((state) => ({
    //variables de rdx a crear
}))(Home);