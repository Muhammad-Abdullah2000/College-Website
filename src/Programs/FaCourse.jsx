import React from 'react';
import './stylesPrograms/FaCourse.css';
import { Link } from 'react-router-dom';

const FaCourse = (props) => {
    return (
        <section id='FaCourse'>

            <div className="facoursedetails">
                <h1>{props.title}</h1>
            </div>

            <div className="introduction">
                <h1>INTRODUCTION</h1> <br />
                <p>{props.descript}</p><br />

                <h1>SUBJECTS FA (PART-I AND PART-II)</h1>
            </div>

            <div className="compulsory">
                <h1>COMPULSORY SUBJECTS</h1><br />
                <p>1. Biology</p>
                <p>2. English</p>
                <p>3. Chemistry</p>
                <p>4. Mathematices</p>
            </div>
 
            <div className="elective">
                <h1>ELECTIVE SUBJECTS</h1><br />
                <p>{props.subject1}</p>
                <p>{props.subject2}</p>
                <p>{props.subject3}</p>
                <p>{props.subject4}</p>
                <p>{props.subject5}</p>
                <p>{props.subject6}</p>
                <p>{props.subject7}</p>
            </div>

            <div className="duration">
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

export default FaCourse