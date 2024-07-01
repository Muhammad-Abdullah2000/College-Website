import React from 'react'
import '../styles/ProgramsBtn.css';
import Board from '../images/bOARD fINAL.jpg';
import proimage1 from '../images/Vector-Smart-Object-4-1.png';
import proimage2 from '../images/Vector-Smart-Object-2-1.png';
import proimage3 from '../images/Vector-Smart-Object-7.png';
import proimage4 from '../images/earth.png';
import proimage5 from '../images/Vector-Smart-Object-2-1 (1).png';
import proimage6 from '../images/Vector-Smart-Object-4-1 (2).png';


const ProgramsBtn = () => {
    return (
        <section id='ProgramsBtn'>
            <div className="boardfinal">
                <img src={Board} alt="" />

            </div>


            <div className="admissionContainer1">
                <div className="headoneText">
                    <h1>A Constituent College of UCP</h1><br /><br />
                    <p>Constituent Colleges are educational institutions that are maintained and administrated by the university itself. Constituent Colleges of UCP provide students in cities across Punjab the opportunity to earn Bachelors and ADP degrees from UCP. Our reputation for academic excellence and commitment to equip students with the knowledge, skills and drive to lead in the 21st century is unprecedented.</p>
                </div>
            </div>


            <div className="admissionContainer1">
                <div className="headoneText">
                    <h1 style={{ fontSize: '30px' }}>About UCP</h1><br /><br />
                    <p>Since its founding in 2002 in Lahore as the first price-chartered university in the country, University of Central Punjab has opened a world of inﬁnite opportunities for its students by equipping them with a well rounded educational experience. Over the years, UCP has laid emphasis on creating global leaders by engaging a world-class faculty.</p>
                </div>
            </div>


            <div className="providers">
                <div className="images">
                    <div className="imgprovie">
                        <img decoding="async" width="249" height="178" src={proimage1} class="attachment-full size-full" alt="" loading="lazy" /> <br />

                        <h1>Multiple <br /> Scholorships</h1>

                    </div>

                    <div className="imgprovie">
                        <img decoding="async" width="249" height="178" src={proimage2} class="attachment-full size-full" alt="" loading="lazy" /> <br />

                        <h1>15+ Diverse <br /> programmes</h1>

                    </div>

                    <div className="imgprovie">
                        <img decoding="async" width="249" height="178" src={proimage3} class="attachment-full size-full" alt="" loading="lazy" /> <br />

                        <h1>Multiple cities across <br /> Punjab</h1>

                    </div>

                  

                    <div className="imgprovie">
                        <img decoding="async" width="249" height="178" src={proimage4} class="attachment-full size-full" alt="" loading="lazy" /> <br />

                        <h1>World-class<br /> faculty</h1>

                    </div>

                    <div className="imgprovie">
                        <img decoding="async" width="249" height="178" src={proimage5} class="attachment-full size-full" alt="" loading="lazy" /> <br />

                        <h1>Prestigious <br /> UCP degree</h1>

                    </div>

                    <div className="imgprovie">
                        <img decoding="async" width="249" height="178" src={proimage6} class="attachment-full size-full" alt="" loading="lazy" /> <br />

                        <h1>Well equipped<br /> labs</h1>

                    </div>

                </div>
            </div>




        </section>
    )
}

export default ProgramsBtn