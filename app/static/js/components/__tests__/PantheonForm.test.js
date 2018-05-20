import React from "react";
import { shallow } from "enzyme";
import PantheonForm from "../PantheonForm";

it("renders without crashing", () => {
  shallow(
    <PantheonForm
      sourcesOfNames={[]}
      sourcesOfTexts={[]}
      namesSource=""
      textsSource=""
      onChange={() => {}}
      onEmbeddedFormChange={() => {}}
      submittable={true}
      onSubmit={() => {}}
    />
  );
});
