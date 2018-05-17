import React from "react";
import { shallow } from "enzyme";
import { GenderSelector } from "../GenderSelector";

it("renders without crashing", () => {
  shallow(<GenderSelector gender="" chromosomes="" onChange={() => {}} />);
});
