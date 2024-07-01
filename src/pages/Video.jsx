import React from 'react'
import '../styles/Video.css';
import video from '../assets/video.webm';

export const Video = () => {
    return (
        <>

            {/* <div className="container4"> */}
                <video controls width="100%" height="597px">
                    <source src={video} type="video/webm" />
                </video>




            {/* </div> */}






        </>
    )
}
