import React from "react";
import { shallow } from "enzyme";
import { ChromosomesSelector } from "../ChromosomesSelector";

it("renders without crashing", () => {
  shallow(<ChromosomesSelector chromosomes="" onChange={() => {}} />);
});
