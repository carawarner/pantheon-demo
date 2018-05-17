import React from "react";
import { shallow } from "enzyme";
import PantheonContainer from "../PantheonContainer";

it("renders without crashing", () => {
  shallow(<PantheonContainer />);
});
