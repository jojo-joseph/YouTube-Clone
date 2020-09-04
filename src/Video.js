import React from 'react'
import Avatar from "@material-ui/core/Avatar";
import "./Video.css"

function Video( {image, title, channel, views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videocard_tumbnail" src={image} alt="" />
        
            <div className="video_info">
                <Avatar 
                    className="video_avatar" 
                    alt={channel} 
                    src={channelImage}
                />
                <div className="video_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Video
