import React, {Fragment} from 'react'
import HomeSchoolOffer from '../../parts/HomePetOffer'

import ShowCaseOne from '../../../assets/img/schoolBuilding.jpg'

function Home() {
   return (
      <Fragment>
         <div className="container" style={{marginBottom:'10px'}}>
            <header style={getShwStyle}>
               <h1 style={getHOneStyle}>Welcome to the Sample University</h1>
               <p style={getPStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis mollitia totam perspiciatis! Nihil.</p>
            </header>
         </div>

         <HomeSchoolOffer />
      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseOne}')`,
   height:'80vh',
   opacity:'0.9',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
   display:'flex',
   flexDirection: 'column',
   justifyContent: 'flex-end',
   alignItems:'center',
}

const getHOneStyle = {
   backgroundColor: '#00850f',
   padding:'8px',
   fontSize:'40px',
   color:'#FFF',
   fontFamily:'Arial, Helvetica, sans-serif',
   lineHeight:'1.2',
}

const getPStyle = {
   backgroundColor:'#00850f',
   fontSize:'15px',
   color:'#FFF',
   padding:'8px',
}

export default Home;
