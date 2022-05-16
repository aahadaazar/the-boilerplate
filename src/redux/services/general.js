import axios from "axios";
import { setTestProducts } from "../actions/general";

export const getFakeStoreData = dispatch => () => {
  return axios.get('https://fakestoreapi.com/products').then(res => {
    dispatch(setTestProducts(res.data))
    return res;
  })
};