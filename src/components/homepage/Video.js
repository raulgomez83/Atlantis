import React from 'react';

import video from "../../images/video.mp4"

export const Video = () => {
    return (
        <div>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4"></source>
            </video>
        </div>
    )
}
