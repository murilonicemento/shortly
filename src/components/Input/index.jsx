import { useState } from "react";
import { Form, MyInput, Cards } from "./styled";
import axios from "axios";

export function Input() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${longURL}/very/long/link.html`
      );
      let arr = [...response.data.result.full_short_link].join("");
      setShortURL([arr]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <MyInput>
        <input
          onChange={(event) => setLongURL(event.target.value)}
          value={longURL}
          type="text"
          placeholder="Shorten a link here..."
        />
        {/* <p>Please add a link</p> */}
        <button>Shorten It!</button>
      </MyInput>
      {shortURL.map((url, index) => (
        <Cards key={index}>
          <p>{longURL}</p>
          <hr />
          <p>{url}</p>
          <button type="button">Copy</button>
        </Cards>
      ))}
    </Form>
  );
}
