import React from "react";
import { shallow } from "enzyme";
import { TextsSourceSelector } from "../TextsSourceSelector";

it("renders without crashing", () => {
  shallow(
    <TextsSourceSelector
      textsSource=""
      sourcesOfTexts={[""]}
      onChange={() => {}}
    />
  );
});
