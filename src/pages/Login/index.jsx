import { Link } from "react-router-dom";
import { Container, Form, CreateAccount, ErrorMessage } from "./styled";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export function Login() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <Container>
      <Form onSubmit={handleSubmit()}>
        <h1>Login</h1>
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Stephen King"
        />
        {errors.name && <ErrorMessage>Nome é obrigatório!</ErrorMessage>}
        <label htmlFor="email">E-mail</label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
        />
        {errors.email && <ErrorMessage>E-mail é obrigatório!</ErrorMessage>}
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: true,
          })}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && <ErrorMessage>Senha é obrigatória!</ErrorMessage>}
        <button type="submit">Submit</button>
        <CreateAccount>
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
}
