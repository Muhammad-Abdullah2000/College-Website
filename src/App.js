import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ContactUs } from './pages/ContactUs';
import { AboutUs } from "../src/pages/AboutUs";
import Admissions from './pages/Admissions';
import Form from './components/Form';
import Careers from './pages/Careers';
import CareerForm from './components/CareerForm';
import ProgramDes from './Programs/ProgramDes';
import FaCourse from './Programs/FaCourse';
import Ics from './Programs/Ics';
import ADP_Commerce from './Programs/ADP_Commerce';
import ADP_Arts from './Programs/ADP_Arts';
import Bachelors from './Programs/Bachelors';
import NewsAndEvents from './pages/NewsAndEvents';
// import ProgramsBtn from './pages/ProgramsBtn';




function App() {



  return (
    <div className="App">


      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/admission' element={<Admissions />}></Route>
          <Route path='/form' element={<Form />}></Route>
          <Route path='/career' element={<Careers />}></Route>
          <Route path='/careerform' element={<CareerForm />}></Route>
          {/* <Route path='/programs' element={<ProgramsBtn />}></Route> */}
          <Route path='/programs' element={<ProgramDes />}></Route>


          <Route path='/FaCourse' element={<FaCourse title="F.A Humanities" descript="FA programme is designed for students who are interested in developing careers in the fields of arts, humanities, journalism, media, and other related fields. The programme features experienced teaching faculty with activities and projects designed to help our students gain practical exposure where students can utilize on-campus art labs and studios, thus developing depth in both knowledge & understanding of their preferred fields." subject1="1. Civics" subject2='2. Phy.Education' subject3='3. Economics' subject4='4. Fine Arts' subject5='5. English Literature' subject6='6. Home Economics' subject7='7. Islamiyat Elective' />}></Route>


          <Route path='/generalScienece' element={<FaCourse title="F.A General Science" descript="FA General Science programme is designed for students who are interested in developing careers in the fields of science. The programme develops a rich understanding of both compulsory and elective subject with the help of an in-depth curriculum and an experienced teaching faculty. The subjects are as follows:" subject1="1. physics" subject2='2. Mathematice' subject3='3. Statices' subject4='4. Computer Science' subject5='5. Economics' />}></Route>


          <Route path='/fscPreEngineering' element={<FaCourse title="F.Sc Pre Engineering" fecilities="FACILITIES:" descript="FSc Pre- Engineering programme is one of the most credible programs for students to achieve bright careers in multiple fields of engineering. This programme serves as a gateway to prepare students to pursue their bachelor’s degrees in top universities." subject1="1. physics" subject2='2. Mathematice' subject3='3. Urdu' subject4='4. Pakistan Studies' subject5='5. Chemistry' subject6='6. English' subject7='7. Islamic Studies' />}></Route>


          <Route path='/fscPreMedical' element={<FaCourse title="F.Sc Pre Engineering" fecilities="FACILITIES:" descript="FSc Pre- Engineering programme is one of the most credible programs for students to achieve bright careers in multiple fields of engineering. This programme serves as a gateway to prepare students to pursue their bachelor’s degrees in top universities." subject1="1. physics" subject2='2. biology' subject3='3. Urdu' subject4='4. Pakistan Studies' subject5='5. Chemistry' subject6='6. English' subject7='7. Islamic Studies' />}></Route>


          <Route path='/ics' element={<Ics />}></Route>


          <Route path='/adpcom' element={<ADP_Commerce title='4-YEAR BACHELOR DEGREE PROGRAMMES' statement='Our four-year BS programme offers a wide range of disciplines in Science, Social Science, Commerce, Business Studies and Humanities. The programme is aimed to focus on the comprehensive development of students and implements a well-designed curriculum as approved by the HEC. These programmes are available in relevant campuses with affiliation to different public universities.' />}></Route>


          <Route path='/adparts' element={<ADP_Arts title='4-YEAR BACHELOR DEGREE PROGRAMMES' semester="4-YEAR SEMESTER SYSTEM" statement='Our four-year BS programme offers a wide range of disciplines in Science, Social Science, Commerce, Business Studies and Humanities. The programme is aimed to focus on the comprehensive development of students and implements a well-designed curriculum as approved by the HEC. These programmes are available in relevant campuses with affiliation to different public universities.' />}></Route>

          <Route path='/bachelors' element={<Bachelors title='Bachelors' />}></Route>
          <Route path='/news' element={<NewsAndEvents />}></Route>


        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
