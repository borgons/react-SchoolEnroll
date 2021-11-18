import React, {Fragment} from 'react'

import SchoolOfferOne from '../../assets/img/schoolOffer1.jpeg'
import SchoolOfferTwo from '../../assets/img/schoolOffer2.jpeg'
import SchoolOfferThree from '../../assets/img/schoolOffer3.jpeg'

function HomePetOffer() {
   return (
      <Fragment>
         <div className="container">
            <div className="row">

               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src={SchoolOfferOne} alt="school"/>
                        <span className="card-title" style={{fontWeight:'600'}}>School</span>
                     </div>
                     <div className="card-content yellow lighten-3">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                     </div>
                  </div>
               </div>

               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src={SchoolOfferTwo} alt="school" height="263px"/>
                        <span className="card-title" style={{fontWeight:'600'}}>Classrooms</span>
                     </div>
                     <div className="card-content yellow lighten-3">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                     </div>
                  </div>
               </div>

               <div className="col s4">
                  <div className="card">
                     <div className="card-image">
                        <img src={SchoolOfferThree} alt="school" height="263px"/>
                        <span className="card-title" style={{fontWeight:'600'}}>Educatiopns</span>
                     </div>
                     <div className="card-content yellow lighten-3">
                        <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

export default HomePetOffer
