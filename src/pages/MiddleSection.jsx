import React from 'react'
import img4 from '../images/Today Post.jpg';
import '../styles/Middle.css';


const MiddleSection = () => {
    return (
        <>
            <div className="container7">
                <div className='left1'>
                    <img src={img4} alt="" />
                </div>

                <div className="right1">
                    <div className="topper">
                        <h1>WE GOT <br /><span id='mission1'>VISION</span></h1><br /><br /><br />
                        <h2 id='pgc'>“We are truly humbled by the trust of millions and take pride in uplifting our social fabric by educating the youth and mentoring them for a better future. Our journey of over 38 years is nothing but a reflection of our commitment and passion towards creating a better tomorrow for our society. With our wide network of schools, colleges and universities, we believe in continuously improving the standards and quality of education in Pakistan.”</h2>

                        <h3>By the Chairman Markhor <br />
                            <span id='MAHMOOD' >Mr Mubarak Hayat</span>

                        </h3>
                    </div>
                </div>



            </div>



        </>
    )
}

export default MiddleSection