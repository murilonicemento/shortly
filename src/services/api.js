import axios from "axios";

const api = axios.create({
  baseURL: ""
});

export async function registerUser(data) {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function login(data) {
  try {
    const response = await api.post("/login", data);
    return response;
  } catch (error) {
    console.error(error);
  }
}