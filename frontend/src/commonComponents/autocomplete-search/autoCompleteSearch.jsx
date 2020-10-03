import React, { useRef, useState } from "react";
import "./autoCompleteSearch.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
const AutoCompleteSearch = ({ data, placeholder }) => {
  useEffect(() => {
    document.addEventListener("click", handleHide);
    return () => {
      document.removeEventListener("click", handleHide);
    };
  });
  const searchInput = useRef(null);
  const suggestions = useRef(null);
  const [matched, setMatched] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  function handleHide(e) {
    if (e.target !== searchInput.current && e.target !== suggestions.current) {
      suggestions.current.style.display = "none";
    } else return;
  }

  function findMatches(word, data) {
    const regex = new RegExp(word, "gi");
    const matchedData = data.filter((item) => item.fullname.match(regex));
    return matchedData;
  }
  function display(value) {
    const matched = findMatches(value, data);
    setMatched(matched);
  }

  return (
    <div>
      <form>
        <input
          onClick={() => {
            suggestions.current.style.display = "block";
          }}
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
          {searchQuery.length > 0 &&
            matched.map((item) => {
              const regex = new RegExp(searchQuery, "gi");
              const output = item.fullname.replace(
                regex,
                `<span class="highlighted" >${searchQuery}</span>`
              );
              return (
                <NavLink
                  key={item._id}
                  className="patient-link"
                  to={`/home/${item._id}`}
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
