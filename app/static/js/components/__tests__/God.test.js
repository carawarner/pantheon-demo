import React from "react";
import { shallow } from "enzyme";
import { God } from "../God";

it("renders without crashing", () => {
  shallow(<God god={{}} />);
});
