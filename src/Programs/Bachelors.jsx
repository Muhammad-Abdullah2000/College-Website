import React from 'react'
import './stylesPrograms/ADP_Commerce.css';
import { Link } from 'react-router-dom';

const Bachelors = (props) => {
  return (
    <section id='ADPCommerce'>

    <div className="facoursedetails">
        <h1>{props.title}</h1>
    </div>

    <div className="introduction">
        <h1>INTRODUCTION</h1> <br />
        <p>ADP programme is designed to enhance the skills of our students in computer science and information technology. With our advanced technological teaching methods and state-of-the-art tools, our students learn and excel in becoming tech professionals in leading IT companies worldwide, enabling them to pursue a wide range of careers.</p><br />

        {/* <h1>SUBJECTS FA (PART-I AND PART-II)</h1> */}
    </div>

    <div className="compulsory">
        <h1>FACILITIES</h1><br />
        <p>1. Computer Labs</p>
        <p>2. Microsoft Certifications</p>
        <p>3. Robotics Lab</p>
       
    </div>

    <div className="elective">
    <h1>SUBJECTS FA (PART-I AND PART-II)</h1> <br />
        <h1>ELECTIVE SUBJECTS</h1><br />
        <p>1. Urdu</p>
        <p>2. English</p>
        <p>3. Islamic Studies</p>
        <p>4. Pakistan Studies</p>
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

export default Bachelors