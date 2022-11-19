import React from 'react';
import './ProfileMain.css';


function ProfileMain()
{
    return(
        <div className='profileMain'>
            <div className='cover'>
                <a href='#'>
                <img className='profile_img' src='https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'/>
                </a>
            </div>
            <div className='follow-btn-container fw-bold float-end'>
                <button className='follow-btn'>Follow</button>
            </div>
        </div>
    )

}


export default ProfileMain;