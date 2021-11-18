import { NEW_STUDENT } from '../actions/type'

const initialState = {
   students:[]
}

export default function stdPet(state = initialState, action){
   switch (action.type) {
      case NEW_STUDENT:
         return {
            ...state,
            students: [action.payload, ...state.students]
         }
      default:
         return state;
   }
}