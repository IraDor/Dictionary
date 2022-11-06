import React, { useState } from "react";
// import axios from "axios";
// import Result from "./Result";
// import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <label>What word do you want to look up?</label>
          <input
            type="search"
            placeholder="Search for a word"
            defaultValue={props.defaultKeyword}
            autoFocus={true}
            className="form-control search-input"
            onChange={updateKeyword}
          />
        </form>
      </section>
    </div>
  );
}
