import React from "react";
import { PantheonForm } from "../components/PantheonForm";
import { PantheonContainer } from "./PantheonContainer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <PantheonForm />
        <PantheonContainer />
      </div>
    );
  }
}
