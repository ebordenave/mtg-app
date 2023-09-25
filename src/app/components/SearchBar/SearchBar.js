"use client";
import {useState} from "react"; // import axios from 'axios';
import "./SearchBar.css"; // import axios from 'axios';
// import axios from 'axios';
// import styles from

const SearchBar = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  return (
    <>
      <div className="wrapper">
        <div className="input-wrapper">
          <input type="text" placeholder="search..." />
          <button>cta</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
