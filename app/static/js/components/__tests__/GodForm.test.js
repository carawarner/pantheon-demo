import React from "react";
import { shallow } from "enzyme";
import GodForm from "../GodForm";

it("renders without crashing", () => {
  shallow(<GodForm chromosomes="" godID="" onChange={() => {}} />);
});
