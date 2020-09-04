import React from 'react'
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";


function ChannelRow({
    image, 
    channel, 
    verified, 
    subs, 
    noOfVideos, 
    disscription,
    }) {
    return (
        <div className="channelRow">
                <Avatar 
                    className="channelRow_logo" 
                    alt="" 
                    src={image} 
                />
            <div className="channelRow_text">
                <h4>
                    {channel} {verified && <VerifiedIcon /> }
                </h4>
                <p>
                    {subs} subscribers • {noOfVideos} videos
                </p>
                <p>
                    {disscription}
                </p>
            </div>

        </div>
    )
}

export default ChannelRow
