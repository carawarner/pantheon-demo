import React from "react";
import { shallow } from "enzyme";
import { NamesSourceSelector } from "../NamesSourceSelector";

it("reanders without crashing", () => {
  shallow(
    <NamesSourceSelector
      namesSource=""
      sourcesOfNames={[""]}
      onChange={() => {}}
    />
  );
});
