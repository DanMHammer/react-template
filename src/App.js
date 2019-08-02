import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import ComponentExample from "./ComponentExample";

const App = () => {
  const themeHook = useState("green");

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <header>
          <Link to="/">
            <h1>Title</h1>
          </Link>
          <Router>
            <ComponentExample path="/" />
            {/* Example: <Details path "/details/:id"/> */}
          </Router>
        </header>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
