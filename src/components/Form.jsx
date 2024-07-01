import React from 'react'
import '../styles/Form.css';

const Form = () => {
    return (
        <section id='ApplyForm'>

            <div className="onlineAdmissions">
                <h1>Online Admissions</h1>
            </div>

            <div className="formcontainer">
                <div className="info">
                    <label htmlFor="">Gender</label>
                    <select name="language" id="language">
                        <option disabled selected value>select an option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>

                    </select>


                    <label htmlFor="">Campus</label>
                    <select name="language" id="language">
                        <option disabled selected value>select an option</option>
                        <option value="">JavaScript</option>
                        <option value="">Python</option>
                        <option value="" disabled>C++</option>
                        <option value="" >Java</option>
                    </select>



                    <label htmlFor="">Select Course</label>
                    <select name="language" id="language">
                        <option disabled selected value>select an option</option>
                        <option value="">JavaScript</option>
                        <option value="">Python</option>
                        <option value="" disabled>C++</option>
                        <option value="" >Java</option>
                    </select>


                </div>

                <div className="personalInfo1">
                    <h1 id='PI' style={{ color: '#48465b' }}>Personal Info</h1>
                    <hr id='gap1' />

                    <div className="personalContainer">



                        <div className='Lname' >
                            <label htmlFor="">Name</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Father Name</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Relationship</label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Parents / Guardian CNIC</label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Student's CNIC / B-Form</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Date of Birth</label><br />
                            <input type="text" /><br />
                        </div>




                    </div>
                </div>

                <div className="personalInfo1">
                    <h1 id='PI' style={{ color: '#48465b' }}>Contact Info</h1>
                    <hr id='gap1' />

                    <div className="personalContainer">



                        <div className='Lname' >
                            <label htmlFor="">Parent's / Guardian Contact No.</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Student's Contact No.</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Email</label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Address</label><br />
                            <input type="text" /><br />
                        </div>






                    </div>
                </div>



                <div className="personalInfo1">
                    <h1 id='PI' style={{ color: '#48465b' }}>Academic Info</h1>
                    <hr id='gap1' />

                    <div className="personalContainer">



                        <div className='Lname' >
                            <label htmlFor="">Degree</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Passing Year </label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Board</label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Group</label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Obtained Marks </label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Total Marks</label><br />
                            <input type="text" /><br />
                        </div>

                        <div className='Lname' >
                            <label htmlFor="">Board Roll No.</label><br />
                            <input type="text" /><br />
                        </div>






                    </div>
                </div> <br /> <br /> <br /><br />


                <div className="personalInfo1">

                    <hr id='gap1' />

                    <div className="personalContainer">



                        <div className='Lname'  >
                            <label htmlFor="">Which school have you graduated from</label><br />
                            <input type="text" /><br />
                        </div>


                        <div className='Lname' >
                            <label htmlFor="">Where did you hear from us</label><br />
                            <input type="text" /><br />
                        </div>









                    </div>
                </div>

                <div className="submitFormbuttons">
                    <input type="submit" value="Cancel" />
                    <input type="submit" />
                </div>



            </div>
        </section>
    )
}

export default Form