import { SAVE_FORM, GET_FORMS, DELETE_FORM, FORM_UPDATE } from "../constat";
// import history from "../../Components/history/history";
// import {history} from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// let initState = {
//   msg: null,
//   isCategoryDeleted: null,
//   companyEditMsg: null,
//   isDataComing: false,
// };

var initState = {
  DBFormdata: [],
  isDataComing: " ",
};



export function FormReducer(state = initState, action) {

  

  switch (action.type) {
    case SAVE_FORM:
      console.log("reducer run", action.payload.data);

      console.log("reducer run", action.payload.data.status);

      state.msg = "Company Succesfully Created.";
      return {
        ...state,
        isDataComing: action.payload.flag,
      };

      break;

    case GET_FORMS:
      console.log("reducer run", action.payload);
      console.log("reducer run", action.payload.status);

      return {
        ...state,
        DBFormdata: action.payload,
      };

      break;

    case DELETE_FORM:
      console.log("data in reducer for delete action", action.payload._id);
      let filterStudents = state.DBFormdata.filter(
        (item) => item._id !== action.payload._id
      );
      console.log("filterStudents", filterStudents);
      return {
        ...state,
        //  DBFormdata: [...DBFormdata, filterStudents],
        DBFormdata: filterStudents,
      };

      break;

    case FORM_UPDATE:
      // state.companyEditMsg = "Company Successfully Edited";
      console.log("Company Successfully Edited");
      

      

      break;

    default:
      break;
  }
  return state;
}
