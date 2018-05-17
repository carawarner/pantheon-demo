import React from "react";
import { shallow } from "enzyme";
import { Pantheon } from "../Pantheon";

it("renders without crashing", () => {
  shallow(<Pantheon gods={[]} />);
});
