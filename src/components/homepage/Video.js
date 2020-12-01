import React from 'react';

import video from "../../images/video.mp4"

export const Video = () => {
    return (
        <div className="video__box">
            <video  className="video" loop muted>
                <source src={video} type="video/mp4"></source>
            </video>
        </div> 
    )
}
