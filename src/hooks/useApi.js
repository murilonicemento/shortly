import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api"
});

export const useApi = () => ({
  validateToken: async (token) => {
    return {
      user: {
        name: "Murilo",
        email: "teste@email.com"
      }
    }

    // try {
    //   const response = await api.post("/validate", { token });
    //   return response.data;
    // } catch (error) {
    //   Alert("Error validating access token!");
    // }
  },
  login: async (email, password) => {
    return {
      user: {
        name: "Murilo",
        email: "teste@email.com"
      },
      token: {
        access: "aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890",
        refresh: "1a2b3c4d5e6f7g8h9i0jAaBbCcDdEeFfGgHh"
      }
    }

    // try {
    //   const response = await api.post("/login", { email, password });
    //   return response.data;
    // } catch (error) {
    //   Alert("Error when logging in!");
    // }
  },
  signOut: async () => {
    return { status: true };

    // try {
    //   const response = await api.post("/logout");
    //   return response.data; 
    // } catch (error) {
    //   Alert("Error when logging out!");
    // }
  }
})