import axios from "axios";
const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("error while calling api", error);
  }
};
export const getUser = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while login", error);
  }
};
export const addProduct = async (data) => {
  try {
    return await axios.post(`${URL}/addproduct`, data);
  } catch (error) {
    console.log("error while calling api", error);
  }
};
