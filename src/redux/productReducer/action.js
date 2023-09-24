import axios from "axios"
import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from "./actionType"

export const addProduct = (product) => (dispatch) => {
   dispatch({ type: PRODUCT_REQUEST })
   axios.post("http://localhost:8080/product", product)
      .then(() => {
         dispatch({ Type: ADD_PRODUCT_SUCCESS })
      })
      .catch(() => {
         dispatch({ type: PRODUCT_FAILURE })
      })
}

export const getProduct = (paramsObj) => (dispatch) => {

   dispatch({ type: PRODUCT_REQUEST })
   axios.get("http://localhost:8080/product", paramsObj)
      .then((res) => {

         dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
      })
      .catch((err) => {
         dispatch({ type: PRODUCT_FAILURE })
      })
}


export const editProduct = (dataobj, id) => (dispatch) => {
   dispatch({ type: PRODUCT_REQUEST })
  return axios.patch(`http://localhost:8080/product/${id}`, dataobj)
      .then((res) => {
         dispatch({ Type: EDIT_PRODUCT_SUCCESS, payload: res.data })
      })
      .catch(() => {
         dispatch({ type: PRODUCT_FAILURE })
      })
}
 
 export const handleDelete = (id) => (dispatch) => {
   dispatch({type:PRODUCT_REQUEST})
  return  axios.delete(`http://localhost:8080/product/${id}`)
   .then((res) => {
      dispatch({type:DELETE_PRODUCT_SUCCESS})
   })
   .catch((err)=> {
      dispatch({type:PRODUCT_FAILURE})
   })
 }