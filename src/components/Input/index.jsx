import { MyInput } from "./styled";

export function Input() {
  return (
    <MyInput>
      <input type="text" placeholder="Shorten a link here..." />
      <button>Shorten It!</button>
    </MyInput>
  );
}
