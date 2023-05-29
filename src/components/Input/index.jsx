import { useState } from "react";
import {
  Form,
  MyInput,
  LinkInput,
  ErrorMessage,
  Cards,
  Button,
} from "./styled";
import axios from "axios";

export function Input() {
  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState([]);
  const [inputEmpty, setInputEmpty] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [longURLArr, setLongURLArr] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (longURL == "") {
      setInputEmpty(true);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${longURL}`
      );
      setLongURLArr([longURL]);
      setShortURL([response.data.result.full_short_link]);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCopy(event) {
    event.preventDefault();
    const url = shortURL;
    navigator.clipboard
      .writeText(url)
      .then(() => setIsCopied(true))
      .catch((error) => console.error("Error ao copiar URL", error));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <MyInput>
        <div>
          <LinkInput
            onChange={(event) => setLongURL(event.target.value)}
            value={longURL}
            isEmpty={inputEmpty}
            type="text"
            placeholder="Shorten a link here..."
          />
          <ErrorMessage isEmpty={inputEmpty}>Please add a link</ErrorMessage>
        </div>
        <button type="submit">Shorten It!</button>
      </MyInput>
      {shortURL.map((url, index) => (
        <Cards key={index}>
          <p>{longURLArr[0]}</p>
          <hr />
          <div>
            <a href={url}>{url}</a>
            <Button type="button" onClick={handleCopy} copied={isCopied}>
              {isCopied ? "Copied!" : "Copy"}
            </Button>
          </div>
        </Cards>
      ))}
    </Form>
  );
}
