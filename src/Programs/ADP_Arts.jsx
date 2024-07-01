import React from 'react'
import './stylesPrograms/ADP_Commerce.css';
import { Link } from 'react-router-dom';

const ADP_Arts = (props) => {
    return (
        <section style={{ height: "180vh" }} id='ADPCommerce'>

            <div className="facoursedetails">
                <h1>{props.title}</h1>
            </div>

            <div className="introduction">
                <h1 style={{ color: "#fff", fontSize: "45px" }}>BS Programs</h1> <br />
                <h1>{props.semester}</h1> <br />
                <p>{props.statement}</p><br />

                {/* <h1>SUBJECTS FA (PART-I AND PART-II)</h1> */}
            </div>

            <div className="compulsory">
                <h1 style={{ display: "none" }}>FACILITIES</h1><br />
                <p>1. Science</p>
                <p>2. Commerce</p>
                <p>3. Arts</p>

            </div>

            <div style={{ display: "none" }} className="elective">
                <h1>SUBJECTS FA (PART-I AND PART-II)</h1> <br />
                <h1>ELECTIVE SUBJECTS</h1><br />
                <p>1. Urdu</p>
                <p>2. English</p>
                <p>3. Islamic Studies</p>
                <p>4. Pakistan Studies</p>
            </div>

            <div style={{ display: "none" }} className="duration">
                <h1>Duration</h1> <br />
                <p>The duration of the programme is two years. The BISE conducts terminal examinations for 1st year and 2nd year separately.</p>
            </div>

            <div className="enroll">
                <h1>ADMISSIONS OPEN</h1>
                <Link to='/Form'><button>Enroll Now</button></Link>
            </div>


        </section>
    )
}

export default ADP_Arts