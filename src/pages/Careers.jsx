import React from 'react'
import '../styles/Careers.css';
import { Link } from 'react-router-dom';

const Careers = () => {
    return (
        <section id='Careers'>
            <div className="career1">
                <h1>CAREERS</h1>
            </div>


            <div className="career2">

                <div className="careerCard1">
                    <h1><Link to='/careerform' id='CareerForm'>TEACHING</Link></h1>
                </div>

                <div className="careerCard2">
                    <h1>NON-TEACHING</h1>
                    <h5>No Current Opening</h5>
                </div>

            </div>


        </section>
    )
}

export default Careers