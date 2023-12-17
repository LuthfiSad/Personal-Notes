import React from "react";
import SearchHeader from "./searchHeader";
import ToogleDarkMode from "./toogleDarkMode";

function Header({ onSearch }) {
  return (
    <header className="head_bar">
      <h1 className="head_bar_title">
        <i>MyNotes</i>
      </h1>
      <div className="head_right">
        <SearchHeader onSearch={onSearch} />
        <ToogleDarkMode />
      </div>
    </header>
  );
}

export default Header;
