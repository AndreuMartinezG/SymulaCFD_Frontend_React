import React from 'react';
import './HeaderProfile.css'
import { connect } from 'react-redux';
import FaviconSymula from '../../img/FaviconSymula.png';
import CocheMVP from '../../img/CocheMVP.jpg';

const HeaderProfile = (props) => {

    return (

        <div className="headerProfile">
            <img
                src={CocheMVP}
                className="headerProfileMainImg"
                alt="cover"
            />
            <div className="headerProfileImg">
                <img
                    src={FaviconSymula}
                    className="headerProfileBodyImg"
                    alt="cover"
                />
            </div>
        </div>

    )

}

export default connect((state) => ({
    // userData: state.credentials.user
}))(HeaderProfile);