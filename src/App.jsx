import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { CodeConfirmation } from "./pages/CodeConfirmation";
import { Private } from "./pages/Private";
import { NotFound } from "./pages/NotFound";
import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/codeConfirmation" element={<CodeConfirmation />} />
            <Route
              path="/private"
              element={
                <RequireAuth>
                  <Private />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
