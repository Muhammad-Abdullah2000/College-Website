import React from 'react'
import '../styles/ContactUs.css';

export const ContactUs = () => {
    return (
        <section id='Contact'>

            <div className="contact">
                <h1>CONTACT US</h1>
            </div>

             <div className="cards">
                <div className='details'>

                    <div className="top1">
                        <p>HEAD OFFICE LOCATION</p><br />
                        <p>123-C, Block E1, Hali Road Gulberg, III <br /> Lahore</p>
                    </div>

                    <div className="top2">
                        <p>CONTACT NUMBER</p>
                        <p>Helpline - 0800-78608</p><br />
                        <p>(07:00am to 09:00pm)</p>
                    </div>


                    <div className="top3">
                        <p>EMAIL ADDRESS</p><br />
                        <p>info@MarkhorCollege.edu</p>

                    </div>

                </div>

                <div className="dicussion">
                    <h1>INTERESTED IN DISCUSSING?</h1>
                    <form id='ContactForm' action="">

                        <p>Name</p>
                        <input type="text" placeholder='Enter Name' id='name' width="100%" />

                        <p id='contactForm'>Email</p>
                        <input type="email" placeholder='Enter Email' id='name' width="100%" />

                        <div className="formContainer">

                            <div className="SubjectContainer">
                                <p>Subject</p>
                                <input type="text" placeholder='Enter Subject' id='subject' />
                            </div>



                            <div className="PhoneContainer">
                                <p>Email</p>
                                <input type="number" placeholder='Enter number' id='phone' width="100%" />
                            </div>

                        </div>

                        <p>Message</p>
                        <input type="text" placeholder='Enter Message' id='message' width="100%" />


                        <button className='btn1'>Send Your Message</button>

                    </form>
                </div>
            </div>

            <div className="location">
                <div className="loc">
                    <p>Your Location</p>
                    <input type="text" />
                </div>

                <div className="locationButton">
                    <button id='locButton'>Search</button>
                </div>
            </div> 



        </section>
    )
}
