import "babel-polyfill";
import React from "react";
import PantheonContainer from "./PantheonContainer";
import { About } from "../components/About";
import "../../css/main.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="container typography">
        <About />
        <PantheonContainer />
      </div>
    );
  }
}
