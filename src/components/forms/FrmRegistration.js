import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { studentRegister } from '../../actions/studentActions'

import { ToastContainer} from "react-toastify";

const FrmRegistration = ({studentRegister}) => {

   const [formData, setFormData] = useState(
      {  
         stdID:"",
         stdFirstName:"",
         stdLastName:"",
         stdGender:"",
         stdSection:"",
      },
      []
   );
   
   const {
      stdID, 
      stdFirstName, 
      stdLastName, 
      stdGender, 
      stdSection
   } = formData;

   
   const onChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value})
   };
   
   const onSubmit = e => {
      e.preventDefault();


      studentRegister(formData);

      setFormData({
         stdID:"",
         stdFirstName:"",
         stdLastName:"",
         stdGender:"",
         stdSection:"",
      })
   };

   return (
      <Fragment>
         <ToastContainer />
         <div className="container">
            <div className="row">
               <div className="col s12 ">
                  <div className="card">
                     <div className="card-content yellow lighten-2">
                        <h6 
                           className="center-align" 
                           style={{marginBottom:'20px'}}>
                           Student Registration
                        </h6>

                        {/* FORM */}
                        <form onSubmit={onSubmit}>

                           <div className="row">
                              <div className="input-field col s6 offset-s3">
                                 <label className="active black-text" htmlFor="ID">ID</label>
                                 <input 
                                    type="text" 
                                    name="stdID"
                                    value={stdID}
                                    onChange={(e) => onChange(e)}
                                    className="validate"/>
                              </div>
                           </div>
                           <div className="row">
                              <div className="input-field col s6 offset-s3">
                                 <label className="active black-text" htmlFor="FirstName">FirstName</label>
                                 <input 
                                    type="text" 
                                    name="stdFirstName"
                                    value={stdFirstName}
                                    onChange={(e) => onChange(e)}
                                    className="validate"
                                    />
                              </div>
                           </div>
                           <div className="row">
                              <div className="input-field col s6 offset-s3">
                                 <label className="active black-text" htmlFor="LastName">LastName</label>
                                 <input 
                                    type="text" 
                                    name="stdLastName"
                                    value={stdLastName}
                                    onChange={(e) => onChange(e)}
                                    className="validate"/>
                              </div>
                           </div>
                     
                           <div className="row">
                              <div className="input-field col s6 offset-s3">
                              <label className="active black-text" htmlFor="Gender">Gender</label>
                                 <select 
                                    className="browser-default" 
                                    name="stdGender" 
                                    value={stdGender} 
                                    onChange={(e) => onChange(e)}
                                    style={{marginTop:'10px'}}> 
                                       <option value="" disabled>Choose your option</option>
                                       <option value="MALE">MALE</option>
                                       <option value="FEMALE">FEMALE</option>
                                 </select>
                              </div>
                           </div>

                           <div className="row">
                              <div className="input-field col s6 offset-s3">
                                 <label className="active black-text" htmlFor="Section">Section</label>
                                 <input 
                                    type="text" 
                                    name="stdSection"
                                    value={stdSection}
                                    onChange={(e) => onChange(e)}
                                    className="validate"/>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col s6 offset-s3">
                                 <button className="btn green">
                                    <i className="material-icons left">forward</i>Submit
                                 </button>
                              </div>
                           </div>

                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

FrmRegistration.propTypes={
   studentRegister:PropTypes.func.isRequired
}


export default connect(null, {studentRegister})(FrmRegistration)
