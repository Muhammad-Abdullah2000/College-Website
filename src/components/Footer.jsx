import React from 'react'
import '../styles/footer.css'
import img1 from '../assets/Map.png';

const Footer = () => {
    return (
        <footer>

            <div className="container">
                <div className="text1">
                    <h1>2.8 M+ <br /><p>Alumni</p></h1>
                    <h1>130 + <br /><p>CITIES</p></h1>
                    <h1>451 + <br /><p>CAMPUSES</p></h1>
                    <h1>676 K+ <br /><p>CURRENT STUDENTS</p></h1>
                </div>
            </div>

            <div className="container2">
                <div className="form">

                    <form action="">
                        <h1>WE GOT YOUR <br /> FUTURE.</h1>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Number' />
                        <input type="text" placeholder='Message' /><br />

                        <button id='Formbtn'>Submit</button>
                    </form>
                </div>
            </div>

            <div className="container3">
                <div className="left">
                    <div className="text">
                        <p>TOLL FREE &nbsp; <span>0303 6516012</span></p>
                        <p>WhatsApp &nbsp; &nbsp; &nbsp; &nbsp; <span>0303 6516012</span></p>
                        <p>EMAIL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span>info@markhor.info</span></p>
                        <p>COMPLAINT PORTAL &nbsp; <span>Complaint.markhorCollege.edu</span></p>
                    </div>

                    <div className="bottom">

                        <i class='bx bxl-facebook'></i>
                        <i class='bx bxl-twitter'></i>
                        <i class='bx bxl-instagram-alt'></i>
                        <i class='bx bxl-youtube'></i>
                        <i class='bx bxl-linkedin' ></i>

                    </div>

                    <p>2020 Markhor College. All Rights Reserved.</p>
                </div>

                <div className="right">
                    <div className="heading">
                        Our <br /> Locations
                    </div>

                    <div className="img">
                        <img src={img1} alt="" />
                    </div>


                </div>


            </div>
        </footer>
    )
}

export default Footer