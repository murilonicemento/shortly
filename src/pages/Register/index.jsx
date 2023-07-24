import { Link } from "react-router-dom";
import { Container, Form, CreateAccount, ErrorMessage } from "./styled";
import { useForm } from "react-hook-form";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Stephen King"
        />
        {errors.name && <ErrorMessage>Nome é obrigatório</ErrorMessage>}
        <label htmlFor="email">E-mail</label>
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
        />
        {errors.email && <ErrorMessage>E-mail é obrigatório</ErrorMessage>}
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: true,
            minLength: 8,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
          })}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        {errors.password && (
          <ErrorMessage>
            <ul>
              <span>A senha deve conter:</span>
              <li>Pelo menos uma letra maiúscula</li>
              <li>Pelo menos uma letra minúscula</li>
              <li>Pelo menos um número</li>
            </ul>
          </ErrorMessage>
        )}
        {errors.password?.type === "minLength" && (
          <ErrorMessage>Senha deve ter no mínimo 8 caracteres</ErrorMessage>
        )}
        <button type="submit">Submit</button>
        <CreateAccount>
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
}
