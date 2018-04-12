import React from "react";
import PantheonContainer from "./PantheonContainer";
import { About } from "../components/About";

export default class App extends React.Component {
  render() {
    return (
      <div className="container text-center" id="typography">
        <div className="col-md-6 mlr-auto">
          <About />
          <PantheonContainer />
        </div>
      </div>
    );
  }
}
