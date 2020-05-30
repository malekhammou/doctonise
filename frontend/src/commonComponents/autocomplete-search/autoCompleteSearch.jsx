import React, { useRef } from "react";
import "./autoCompleteSearch.css";
const AutoCompleteSearch = ({ data, placeholder }) => {
  const searchInput = useRef(null);
  const suggestions = useRef(null);

  function findMatches(word, data) {
    const regex = new RegExp(word, "gi");
    const matchedData = data.filter((item) => item.match(regex));
    return matchedData;
  }
  function display(value) {
    const matched = findMatches(value, data);
    const html = matched
      .map((item) => {
        const regex = new RegExp(value, "gi");
        const output = item.replace(
          regex,
          `<span class="highlighted" >${value}</span>`
        );
        return `
      <li>
        <span class="name">${output}</span>
      </li>
    `;
      })
      .join("");
    searchInput.current.value.length === 0
      ? (suggestions.current.innerHTML = "")
      : (suggestions.current.innerHTML = html);
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            display(e.target.value);
          }}
          onKeyUp={(e) => {
            display(e.target.value);
          }}
          ref={searchInput}
          type="text"
          autoComplete="off"
          id="searchField"
          placeholder={placeholder}
        ></input>
        <ul ref={suggestions} id="suggestions"></ul>
      </form>
    </div>
  );
};

export default AutoCompleteSearch;
