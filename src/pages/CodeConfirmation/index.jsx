import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Container, Form, ErrorMessage, ForwardCode } from "./styled";

export function CodeConfirmation() {
  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => setFocus("code"), [setFocus]);

  const onSubmit = (data) => {
    navigate("/login");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Confirm the security code</h1>
        <span>Enter the security code that was sent to your email.</span>
        <input
          {...register("code", { required: true })}
          type="number"
          name="code"
          id="code"
          autoComplete="off"
        />
        {errors.code && <ErrorMessage>Code is Required!</ErrorMessage>}
        <button id="submit-btn">Confirm</button>
        <span>It may take a few minutes for you to receive your code.</span>
        <span>
          Didn&apos;t receive the code? <ForwardCode>Forward</ForwardCode>
        </span>
      </Form>
    </Container>
  );
}
