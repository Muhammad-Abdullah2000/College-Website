import React from 'react'
import '../styles/Top.css';
import img5 from '../images/Post.jpg';

export const Top = () => {
    return (
        <div className="container8">
            <div className="left3">
                <img src={img5} alt="" />
            </div>

            <div className="right3">
                <div className="topper">
                    <h1>ABOUT US</h1><br /><br /><br />
                    <h1 id='pgc2'>LARGEST <br /> EDUCATIONAL <br /> NETWORK IN <br /> PAKISTAN, SINCE <br /> 1985.</h1>

                    <button>Read More</button>
                </div>
            </div>



        </div>
    )
}
