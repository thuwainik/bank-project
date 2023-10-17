import axios, { instance } from "axios";

const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com",
});
export default instance;
