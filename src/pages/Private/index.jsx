import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function Private() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogout() {
    await auth.signOut();
    window.location.reload();
  }

  return (
    <div>
      <h1>Private</h1>
      <p>Olá {auth.user.name}, tudo bem?</p>
      {auth.user && (
        <a href="" onClick={handleLogout}>
          Exit
        </a>
      )}
    </div>
  );
}
