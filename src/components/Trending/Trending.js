import React from "react";
import './Trending.css';



function Tranding(trendingData)
{
    const data = trendingData.data;
    return(
        <div className="trendingMain">
            <p className="tranding_Header">{data.header}</p>
            <p className="tranding_Text">{data.text}</p>
            <p className="tranding_TweetCount">{data.tweetCount}</p>
    
        </div>
    )
}

export default Tranding;



