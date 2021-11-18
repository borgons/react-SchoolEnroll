import React, {Fragment} from 'react'
import FrmRegistration from '../../forms/FrmRegistration'

import ShowCaseFour from '../../../assets/img/showcase4.jpeg'

function Registration() {
   return (
      <Fragment>
         <header style={getShwStyle}></header>

         <FrmRegistration />

      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseFour}')`,
   height:'60vh',
   opacity:'1',
   marginBottom:'5px',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
}

export default Registration

