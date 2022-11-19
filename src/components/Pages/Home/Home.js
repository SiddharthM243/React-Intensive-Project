import React from 'react';
import Feed from '../../Feed/Feed';
import HomeOption from '../../HomeOption/HomeOption';
import LoginOption from '../../LoginOptions/LoginOption';
import './Home.css';


function Home()
{
    return(
       <div className='homeContainer'>
        <div className="leftContainer">
            <HomeOption/>
        </div>
        <div className="centerContainer">
            <Feed/>
        </div>
        <div className="rightContainer">
            <LoginOption/>
        </div>
       </div>
    )
}


export default Home;