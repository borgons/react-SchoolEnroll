import React,{ Fragment } from 'react'

import ShowCaseTwo from '../../../assets/img/showcase2.jpeg'

function About(){
   return (
      <Fragment>
         <header style={getShwStyle}></header>

         <div className="container">
            <div className="row">
               <div className="col s12 ">
                  <div className="card">
                     <div className="card-content yellow lighten-2">
                        <h5 className="center-align">About this Page</h5>
                        <p align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id, modi eos reprehenderit iusto quia. Optio dolor dicta veritatis harum necessitatibus, deserunt corrupti aut pariatur maxime fugiat libero dolorem sint quas beatae explicabo consequuntur asperiores perferendis, ipsa alias officiis voluptatem possimus illo recusandae. Expedita minima officiis esse adipisci officia, nulla ipsam, rerum laudantium dolor perferendis cupiditate quae voluptatem dolorum tempora ad. Totam, ad ipsa. Reprehenderit aspernatur sed sint, vel laudantium mollitia, esse maxime eius ea minima eveniet harum. Cum impedit unde rem provident at distinctio et quos similique velit dolores recusandae officia aut facilis autem cumque nam debitis natus, rerum nisi maxime possimus inventore laudantium totam. Ratione suscipit reiciendis eius deserunt magni impedit ullam natus reprehenderit obcaecati placeat debitis voluptatem nulla quas vitae laudantium doloremque rerum, modi doloribus facere cumque error ipsam! Quis distinctio voluptatum ea hic iusto minus, saepe amet, necessitatibus deleniti eligendi ratione! Explicabo error sint quas sed?</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>


      </Fragment>
   )
}

const getShwStyle = {
   backgroundImage: `url('${ShowCaseTwo}')`,
   height:'50vh',
   opacity:'1',
   marginBottom:'5px',
   backgroundSize:'cover',
   backgroundPosition:'center',
   backgroundRepeat:'no-repeat',
}
export default About;