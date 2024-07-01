import React from 'react'
import '../styles/Bottom.css';
import img3 from '../images/Evening Session.jpg';

const BottomSection = () => {
    return (
        <>
            <div className="container6">
                 <div className='left1'>
                      <img src={img3} alt="" /> 
                
                </div> 
                
                <div className="right1">
                    <div className="topper">
                        <h1>WE GOT <br /><span id='mission'>MISSION</span></h1><br /><br /><br />
                         <h2 id='pgc'>“At Markhor we are not just means to education but a family that cares, grooms and helps unlock the true potential of our students. We are in a constant relentless pursuit to help provide a better future to our youth and build a society that is wise, intelligent and educated. Your trust in us motivates and inspires us to continue doing more so that you can shine in every aspect of your life.”</h2>

                        <h3>By the Executive Director Markhor <br />
                          <span id='sohail' >Mr Mubarak Hayat</span>  

                        </h3> 
                    </div>
                </div> 



            </div>



        </>
    )
}

export default BottomSection