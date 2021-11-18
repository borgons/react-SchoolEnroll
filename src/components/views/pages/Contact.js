import React, {Fragment} from 'react'

import ShowCaseThree from '../../../assets/img/showcase3.jpeg'

function Contact() {
   return (
      <Fragment>
         <header style={getShwStyle}></header>

         <div className="container">
            <div className="row">
               <div className="col s6 offset-s3">
                  <div className="card" >
                     <div className="card-content yellow lighten-2">
                        <h5 className="center-align">Please Contact Us!!!</h5>
                        <ul className="collection">
                           <li className="collection-item">
                              <span className="material-icons" style={{marginRight:'4px'}}>email</span>
                              rrborgonia@gmail.com
                           </li>
                           <li className="collection-item">
                              <span className="material-icons" style={{marginRight:'4px'}}>public</span>
                              Facebook - Sample School
                           </li>
                           <li className="collection-item"><span className="material-icons" style={{marginRight:'4px'}}>
                              public</span>Twitter - Sample School
                           </li>
                           <li className="collection-item"><span className="material-icons" style={{marginRight:'4px'}}>public</span>
                              Instagram - Sample School
                           </li>
                           <li className="collection-item"><span className="material-icons" style={{marginRight:'4px'}}>contact_phone</span>
                              23682429
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}


const getShwStyle = {
   backgroundImage: `url('${ShowCaseThree}')`,
   height:'50vh',
   opacity:'1',
   marginBottom:'5px',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
}


export default Contact
