import React from 'react';

import HomeOption from '../../HomeOption/HomeOption';
import LoginOption from '../../LoginOptions/LoginOption';
import ProfileMain from '../../ProfileMain/ProfileMain';
import './Profile.css';


function Profile()
{
    return(
       <div className='homeContainer'>
        <div className="leftContainer">
            <HomeOption/>
        </div>
        <div className="centerContainer">
           <ProfileMain/> 
        </div>
        <div className="rightContainer">
            <LoginOption/>
        </div>
       </div>
    )
}


export default Profile;