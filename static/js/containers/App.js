import React from "react";
import PantheonContainer from "./PantheonContainer";
import { About } from "../components/About";

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
