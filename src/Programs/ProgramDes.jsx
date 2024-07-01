import React from 'react'
import './stylesPrograms/ProgramDes.css';
import { Link } from 'react-router-dom';

const ProgramDes = () => {
    return (
        <div>
            <section id='ProgramDes'>
                <div className="detailPrograms">
                    <h1>Programs</h1>
                </div>

                <div className="intermediate">
                    <h1>Intermediate</h1>

                    <div className="programbutton">
                        <Link to="/FaCourse"><button>F.A Humanities</button></Link>

                    </div>
                    <div className="programbutton">

                        <Link to="/generalScienece"><button>F.A General Sceience</button></Link>

                    </div>

                    <div className="programbutton">
                        <Link to="/fscPreEngineering"><button>F.Sc Pre Engineering</button></Link>
                    </div>

                    <div className="programbutton">
                        <Link to="/fscPreMedical"><button>F.Sc Pre Mediacal</button></Link>
                    </div>

                    <div className="programbutton">
                        <Link to="/ics"><button>ICS</button></Link>

                    </div>
                    {/* <button>F.A Humanities</button>
                    <button>F.A Humanities</button> */}
                </div>


                <div className="intermediate">
                    <h1>Graduate Programs</h1>

                    <div className="programbutton">
                        <Link to="/adpcom"><button>ADP Commerce</button></Link>

                    </div>
                    <div className="programbutton">

                        <Link to="/adparts"><button>Adp Arts</button></Link>

                    </div>

                    <div className="programbutton">
                        <Link to="/bachelors"><button>Bachelors</button></Link>
                    </div>

                    {/* <div className="programbutton">
                        <Link to="/fscPreMedical"><button>F.Sc Pre Mediacal</button></Link>
                    </div>

                    <div className="programbutton">
                        <Link to="/ics"><button>ICS</button></Link>

                    </div> */}
                    {/* <button>F.A Humanities</button>
                    <button>F.A Humanities</button> */}
                </div>
            </section>



        </div>
    )
}

export default ProgramDes