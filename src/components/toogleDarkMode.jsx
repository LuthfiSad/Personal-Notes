import React from "react";
import { useEffect, useRef } from "react";

function ToogleDarkMode(){
    const darkModeToggle = useRef(null)
    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
          ) {
            darkModeToggle.current.checked = true;
          } else {
            darkModeToggle.current.checked = false;
          }
          handleDarkMode();
      });

    function handleDarkMode(){
        if (darkModeToggle.current.checked) {
            document.body.id = "dark";
            localStorage.theme = "dark";
          } else {
            document.body.id = "";
            localStorage.theme = "light";
          }
    }

    return(
        <div className="toggle-darkmode">
          <span className="toggle-label">light</span>
          <input type="checkbox" onChange={handleDarkMode} ref={darkModeToggle} className="hidden" id="dark-toggle" />
          <label htmlFor="dark-toggle" className="toggle-container">
            <div className="toggle-circle"></div>
          </label>
          <span className="toggle-label">dark</span>
        </div>
    )
}

export default ToogleDarkMode;