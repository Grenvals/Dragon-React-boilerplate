import React from "react";
import ReactDOM, { render } from "react-dom";
import img from "./react.png";
import "./scss/css.css";

const App = () => <img src={img} alt="" />;

ReactDOM.render(<App />, document.getElementById("root"));
