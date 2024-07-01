import React from 'react'
import '../styles/CareersForm.css';

const CareerForm = () => {
  return (
    <section id='CareersForm'>
      <div className="recrutment">
        <h1>Markhor Recrutment Form</h1>
      </div>



      <form action="" id='personalInfoForm'>
        <div className="personalinformation">
          <div className="personalContainer1">



            <div className='Lname1' >
              <label htmlFor="">Name*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Father Name*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname1' >
              <label htmlFor="">Date of Birth*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Nationality*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname1' >
              <label htmlFor="">Date of Birth*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Nationality*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname1' >
              <label htmlFor="">CNIC#*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Domicile*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname2' >
              <label htmlFor="">Present Address*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname2' >
              <label htmlFor="">Permanent Address</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Email*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Phone*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname2' >
              <label htmlFor="">Department / Subject*</label><br />
              <input type="text" /><br />
            </div>


          </div><br /><br /><br />

          <hr />


          <h1 id='qualification'>Last qualification</h1>

          <div className="personalContainer2">



            <div className='Lname3' >
              <label htmlFor="">Last Degree*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname3' >
              <label htmlFor="">Degree Title*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname3' >
              <label htmlFor="">Passing Year*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname3' >
              <label htmlFor="">University*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname3' >
              <label htmlFor="">Institution*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname3' >
              <label htmlFor="">Marks/CGPA*</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname3' >
              <label htmlFor="">Specialization*</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname4' >
              <label htmlFor="">Region To Be Applied For</label><br />
              <input type="text" /><br />
            </div>










          </div><br /><br /><br /><br />



          <hr style={{ marginBottom: "20px" }} />

          <div className="personalContainer1">



            <div className='Lname1' >
              <label htmlFor="">Experience</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Last Organization</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname1' >
              <label htmlFor="">References 1</label><br />
              <input type="text" /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">References 2</label><br />
              <input type="text" /><br />
            </div>

            <div className='Lname1' >
              <label htmlFor="">CV*</label><br />
              <input type="file" style={{ border: 'none' }} /><br />
            </div>


            <div className='Lname1' >
              <label htmlFor="">Other Documents</label><br />
              <input type="file" style={{ border: 'none' }} /><br />
            </div>




          </div>


          <input type="submit" value="Submit" style={{ marginLeft: "20%", marginRight: "20%", background: "#e23b29", fontWeight: "bold", color: "#fff", cursor: 'pointer' }} /> 






        </div>
      </form>



    </section>
  )
}

export default CareerForm