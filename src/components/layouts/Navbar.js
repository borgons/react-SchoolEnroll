import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/img/schoolLogo.png'


function Navbar() {
   return (
      <Fragment>
         <nav className="green darken-4" style={{marginBottom:'5px'}}>
            <div className="nav-wrapper">
               <img style={{marginLeft:'12px'}} src={Logo} width="58" height="58" alt="School Logo"/>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                     <Link to="/">
                        <i className="large material-icons left">home</i>Home
                     </Link>
                  </li>
                  <li>
                     <Link to="/about">
                        <i className="medium material-icons left">help</i>About
                     </Link>
                  </li>
                  <li>
                     <Link to="/register">
                        <i className="medium material-icons left">school</i>Registration
                     </Link>
                  </li>
                  <li>
                     <Link to="/contact">
                        <i className="medium material-icons left">contact_phone</i>Contacts
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </Fragment>
   )
}







export default Navbar
