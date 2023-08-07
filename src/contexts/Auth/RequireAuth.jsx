import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Login } from "../../pages/Login";
import { PropTypes } from "prop-types";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
