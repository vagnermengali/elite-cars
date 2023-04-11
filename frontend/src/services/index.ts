import axios from "axios";

export const cepApi = axios.create({
  baseURL: "http://viacep.com.br/ws/",
  timeout: 5000,
});

const api = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 5000,
});

export default api;
