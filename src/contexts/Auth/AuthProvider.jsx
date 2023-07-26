import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const api = useApi();

  const signIn = async (email, password) => {
    const data = await api.signIn(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const signOut = async () => {
    await api.signOut();
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
