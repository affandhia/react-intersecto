import * as React from "react";
import { render } from "react-dom";
import AppComponent from "./example/App";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <AppComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
