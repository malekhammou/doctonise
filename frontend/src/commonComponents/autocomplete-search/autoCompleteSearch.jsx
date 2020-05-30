import React, { useRef, useState } from "react";
import "./autoCompleteSearch.css";
import { NavLink } from "react-router-dom";
const AutoCompleteSearch = ({ data, placeholder }) => {
  const searchInput = useRef(null);
  const suggestions = useRef(null);
  const [matched, setMatched] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  function findMatches(word, data) {
    const regex = new RegExp(word, "gi");
    const matchedData = data.filter((item) => item.fullname.match(regex));
    return matchedData;
  }
  function display(value) {
    const matched = findMatches(value, data);
    setMatched(matched);
    /* const html = matched
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
    console.log(html); */
  }

  return (
    <div>
      <form>
        <input
          onChange={(e) => {
            setSearchQuery(e.target.value);
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
        <ul ref={suggestions} id="suggestions">
          {matched.map((item) => {
            const regex = new RegExp(searchQuery, "gi");
            const output = item.fullname.replace(
              regex,
              `<span class="highlighted" >${searchQuery}</span>`
            );
            return (
              <NavLink
                key={item._id}
                className="patient-link"
                to={`/home/patients/${item._id}`}
              >
                <li key={item._id}>
                  <span
                    className="name"
                    dangerouslySetInnerHTML={{ __html: output }}
                  ></span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </form>
    </div>
  );
};

export default AutoCompleteSearch;
