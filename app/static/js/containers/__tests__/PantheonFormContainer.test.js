import React from "react";
import { shallow, disableLifecycleMethods } from "enzyme";
import PantheonFormContainer from "../PantheonFormContainer";

it("renders without crashing", () => {
  shallow(
    <PantheonFormContainer updateGods={() => {}} showSpinner={() => {}} />,
    { disableLifecycleMethods: true }
  );
});
