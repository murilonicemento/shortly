import axios from "axios";

const api = axios.create({
  baseURL: ""
});

export async function register(name, email, password) {
  try {
    const response = await api.post("/register", { name, email, password });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function login(email, password) {
  try {
    const response = await api.post("/login", { email, password });
    return response;
  } catch (error) {
    console.error(error);
  }
}