import axios from 'axios'

import { URL } from '../helpers/request'
import { NEW_STUDENT } from './type'

import { injectStyle } from "react-toastify/dist/inject-style"
import { toast } from 'react-toastify'



injectStyle();



export const studentRegister = (formData) => async dispatch => {
   const config ={
      headers: {
         'Content-Type': 'application/json'
      }
   };

   try {
      const res = await axios.post(`${URL}students/addStudents`,formData, config)
      
         dispatch({
            type: NEW_STUDENT,
            payload: res.data
         });
         toast.success(res.data.msg,{
            theme: 'dark',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
         });

   } catch (err) {

      if(err.response.status === 422){
         toast.error(err.response.data.error,{
            theme: 'dark',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
         });
         
      } 
   }
}
