import { useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/Auth/AuthContext";
// import { login } from "../../services/api";
import { Container, Form, CreateAccount, ErrorMessage } from "./styled";

export function Login() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => setFocus("email"), [setFocus]);

  const onSubmit = async (data) => {
    const isLogged = await auth.login(data.email, data.password);
    if (isLogged) {
      navigate("/private");
    } else {
      console.log("Login failed!");
    }

    // try {
    //   const userData = await login(data);
    //   console.log(userData);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Container>
      <div>
        <h1>Welcome back!</h1>
        <p>
          Login and complete your journey to discover the power of our exclusive
          features.
        </p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          autoComplete="off"
        />
        {errors.email && <ErrorMessage>E-mail é obrigatório!</ErrorMessage>}
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          autoComplete="off"
        />
        {errors.password && <ErrorMessage>Senha é obrigatória!</ErrorMessage>}
        <button type="submit">Login</button>
        <CreateAccount>
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
}
