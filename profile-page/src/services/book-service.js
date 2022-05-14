import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/v1";

const getAllPublicBooks = () => {
  return axios.get(API_URL + "/books");
};

const getPrivateUser = (id) => {
  return axios.get(API_URL + `/users/${id}`, { headers: authHeader() });
};

const postService = {
  getAllPublicBooks,
  getPrivateUser,
};

export default postService;
