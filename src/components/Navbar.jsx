import React, { Component } from 'react'
import "../styles/Navbar.css"
import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {

    return (
      <>
        <nav>
          <a href="/">
            <img src={Logo} className='logo' alt="" />
          </a>

          <div>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><Link to="/about">About Us</Link></li>
              {/* <li><a href="/">UCP Programs</a></li> */}
              <li><Link to="/admission">Admissions</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              {/* <li><a href="/">Life at Campus</a></li>
              <li><a href="/">Activites</a></li>
              <li><a href="/">Blog</a></li>*/}
              <li><Link to="/news">News and Events</Link></li>
              {/* <li><a href="/">Make Pak Green</a></li>  */}
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/career">Careers</Link></li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i id='bar' className={this.state.clicked ? "bx bx-x" : "bx bx-menu"}></i>
            {/* <i class='bx bx-x'></i> */}
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar