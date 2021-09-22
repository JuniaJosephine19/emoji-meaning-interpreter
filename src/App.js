import "./styles.css";
import { useState } from "react";

var color = "blue";
var emojiDictionary = {
  "😊": "smiling",
  "😟": "sad",
  "🥰": "love",
  "🥱": "yawning",
  "💓": "heart",
  "🤗": "hug",
  "😄": "laughing",
  "😉": "winking",
  "😐": "expressionless",
  "🤔": "thinking"
};

var emoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiMeaningHandler(event) {
    var meaning = emojiDictionary[event.target.value];
    if (meaning === undefined) {
      meaning = "Emoji not available in database";
    }
    setMeaning(meaning);
  }

  function onClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h2> Emoji Interpreter </h2>
      <h3>Enter an emoji</h3>
      <input className="input" onChange={emojiMeaningHandler}></input>
      <h1 style={{ color: color }}>{meaning}</h1>
      <h3> Emoji we know </h3>
      {emoji.map((item) => {
        return (
          <span
            onClick={() => onClickHandler(item)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
