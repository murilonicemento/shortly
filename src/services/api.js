import axios from "axios";

const api = axios.create({
  baseURL: ""
});

export async function registerUser(data) {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    throw new Error(`Falha ao registrar o usuário: ${error}`);
  }
}

export async function login(data) {
  try {
    const response = await api.post("/login", data);
    return response;
  } catch (error) {
    throw new Error(`Falha ao realizar o login: ${error}`);
  }
}

export async function refreshToken() {
  try {
    const response = await api.post("/refresh-token", {
      refreshToken: ""
    });

    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    throw new Error(`Falha ao obter um novo token de acesso: ${error}`)
  }
}

api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const access_token = await refreshToken();
        api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
        return api(originalRequest)
      } catch (error) {
        throw new Error(`Falha ao renovar token de acesso: ${error}`)
      }
    }
    return Promise.reject(error);
  }
);