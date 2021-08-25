import axios from "axios";
import {
  SAVE_FORM,
  GET_FORMS,
  DELETE_FORM,
  FORM_UPDATE,
  SAVE_SIGNUP,
} from "../constat";
import API from '../url'

export function Saveform(body) {
  return (dispatch) => {
    // let token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    let formData = new FormData();

    for (var item in body) {
      formData.append(item, body[item]);
    }
    console.log(formData);
    axios
      .post(API + "/Saveformdata", formData, config)
      .then((resp) => {
        // successFul("success");
        console.log(resp.data);
        dispatch({
          type: SAVE_FORM,
          payload: { data: resp.data, flag :true},
        });
        setTimeout(() => {
                  dispatch({
                    type: SAVE_FORM,
                    payload: { data: resp.data, flag: false },
                  });
        }, 2000);
      })
      .catch((err) => {
        // createdFail("err");
        console.log(err);
      });
  };
}



export function GetRecord() {
  return (dispatch) => {
    axios
      .get(API + "/Getformdata")

      .then((resp) => {
        console.log("resp", resp.data);
        dispatch({
          type: GET_FORMS,
          payload: resp.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function DelRecord(id) {
  return (dispatch) => {
    axios.post(API + `/deleteidBase`, { id }).then((resp) => {
      console.log(resp.data);
      dispatch({
        type: DELETE_FORM,
        payload: resp.data,
      });
    });
  };
}
// export function deleteSubCategory(id) {
//   return (dispatch) => {
//     axios.post(API + `/api/SubCategories/delete`, {sub_category_id:id}).then((resp) => {
//       console.log(resp.data);
//       dispatch({
//         type: DELETE_CATEGORY,
//         payload: resp.data,
//       });
//     });
//   };
// }
  

  
//update student in firebase action



///////////////////////////////////////




export function UpdateRecord(body) {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

     console.log("body", body);

  let formData = new FormData();

  for (var item in body) {
    formData.append(item, body[item]);
  }
     console.log('formData', formData);

  return (dispatch) => {
    axios.post(API + `/update`, formData, config).then((resp) => {
      console.log(resp.data);
      dispatch({
        type: FORM_UPDATE,
        payload: resp.data,
      });
    });
  };
}