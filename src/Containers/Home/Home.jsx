import React, {useEffect } from 'react';
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
        if (props.credentials?.token) {
            navigate("/deskboard");
        }
    })




    return (
        <div className='designHome'>
            <div className="cardHome">
                <h1 className='h1Home'>Wellcome to Simula CFD</h1>
                <div className="card w-20 cardBody">
                    <div className="card-body ">
                        <h5 className="card-title">User access</h5>
                        <p className="card-text">Identify yourself on the platform to continue : </p>
                        <div className="optionHome">
                            <a href="/register" className="btn btn-primary">Sign up</a>
                            <div className="spaceHomeAcces">or</div>
                            <a href="/login" className="btn btn-primary">Log in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default connect((state) => ({
    credentials: state.credentials
}))(Home);