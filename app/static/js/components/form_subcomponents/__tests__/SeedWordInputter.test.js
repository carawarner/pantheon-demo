import React from "react";
import { shallow } from "enzyme";
import { SeedWordInputter } from "../SeedWordInputter";

it("renders without crashing", () => {
  shallow(
    <SeedWordInputter name="" label="" seedWord="" onChange={() => {}} />
  );
});
