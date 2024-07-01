import React from 'react';
import '../styles/Admissions.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import markhorimg1 from '../images/Today Post.jpg';
import markhorimg2 from '../images/Evening Session.jpg';
import markhorimg3 from '../images/vecteezy_digital-marketing-agency-social-media-and-post-template_22705941.jpg';
import { Link } from 'react-router-dom';

const Admissions = () => {
    return (
        <section id='admissions'>

            <div className="markhorSlider">

                <Carousel autoPlay interval="2000" transitionTime="1000" showThumbs={false} showArrows={false} showStatus={false} infiniteLoop={true}   >
                    <img src={markhorimg1} alt='' />
                    <img src={markhorimg2} alt='' />
                    <img src={markhorimg3} alt='' />
                </Carousel>

            </div>



            <div className="topdescription">
                <p id='legacy'>Continuing the legacy of excellence in 2022, 176 top positions across intermediate boards of Punjab were bagged by the students at Punjab Colleges. With an effective teaching methodology and a hands-on learning approach, Punjab Colleges students secure admissions to Pakistan’s top Medical, Engineering, and IT universities.</p>
            </div>

            <div className="programs">
                <div className="intermidiate">
                    <h1>INTERMEDIATE AT</h1>
                    <h1>Markhor COLLEGES</h1>
                </div>

                <div className="program">
                    <h1>Our Programmes:</h1>
                </div>

                <div className="programDescription">
                    <p id='markhor'>Punjab Colleges offer purpose built campuses featuring state-of-the-art facilities backed by an experienced faculty, providing you a variety of courses to choose from.</p>
                </div>

                <div className="cards1">
                    <div className="card">
                        <div className="heading1">
                            <h1 id='course'>FSC.</h1>
                            <p id='pre'>Pre-Medical</p>
                        </div>

                        <div className="heading2">
                            <p id='pre2'>This programme aims to deliver diverse knowledge and education related to medicine
                                and other related fields.</p>
                        </div>


                    </div>

                    <div className="card">
                        <div className="heading1">
                            <h1 id='course'>FSC.</h1>
                            <p id='pre'>Pre-Engineering</p>
                        </div>

                        <div className="heading2">
                            <p id='pre2'>This programme serves as a gateway to prepare our students with practical knowledge and education of engineering fields in order to achieve their place in the top engineering universities of the country.</p>
                        </div>


                    </div>

                    <div className="card">
                        <div className="heading1">
                            <h1 id='course'>F.A.</h1>

                        </div>

                        <div className="heading2">
                            <p id='pre2'>Our F.A programme is designed for students who are interested in developing careers in the fields of arts, humanities, journalism, media and other related fields</p>
                        </div>


                    </div>


                     <div className="card">
                        <div className="heading1">
                            <h1 id='course'>ICS</h1>

                        </div>

                        <div className="heading2">
                            <p id='pre2'>ICS programme is designed to enhance the skills of our students in computer science and information technology.</p>
                        </div>


                    </div> 

                     <div className="card">
                        <div className="heading1">
                            <h1 id='course'>I.COM</h1>

                        </div>

                        <div className="heading2">
                            <p id='pre2'>Our I. Com programme helps build your skills in
                                the fields of commerce and accounting, leading to promising careers in accountancy and other related fields.</p>
                        </div>


                    </div> 





                </div>
                
                <div className="appltnow">
                    <button><li><Link to='/form' id='applyNow'>Apply Now</Link></li></button>
                </div> 




            </div>
        </section>
    )
}

export default Admissions