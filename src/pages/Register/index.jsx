import { Link } from "react-router-dom";
import { Container, Form, CreateAccount, ErrorMessage } from "./styled";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { registerUser } from "../../services/api";

export function Register() {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  useEffect(() => setFocus("name"), [setFocus]);

  const onSubmit = async (data) => {
    try {
      const userData = await registerUser(data);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div>
        <h1>New Here?</h1>
        <p>
          Sign Up and complete your experience with shorter and easier-to-share
          links.
        </p>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>
        <input
          {...register("name", { required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Stephen King"
          autoComplete="off"
        />
        {errors.name && <ErrorMessage>Name is Required!</ErrorMessage>}
        <input
          {...register("email", { required: true })}
          type="email"
          name="email"
          id="email"
          placeholder="name@email.com"
          autoComplete="off"
        />
        {errors.email && <ErrorMessage>E-mail is Required!</ErrorMessage>}
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
          autoComplete="off"
        />
        {errors.password && (
          <ErrorMessage>
            <ul>
              <span>The password must contain:</span>
              <li>At least one capital letter</li>
              <li>At least one lowercase letter</li>
              <li>At least one number</li>
            </ul>
          </ErrorMessage>
        )}
        {errors.password?.type === "minLength" && (
          <ErrorMessage>Senha deve ter no mínimo 8 caracteres</ErrorMessage>
        )}
        <button type="submit">Sign Up</button>
        <CreateAccount>
          Already have an account? <Link to="/login">Login</Link>
        </CreateAccount>
      </Form>
    </Container>
  );
}
