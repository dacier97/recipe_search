import { create } from "react-test-renderer";
import RecipeLists from "../components/RecipeLists";
import React from "react";

let component;

const props = {
  data: [],
};

describe("<RecipeLists/>", () => {
  beforeEach(() => {
    component = create(<RecipeLists {...props} />);
  });
  it("renderiza correctamnte", () => {
    expect(component).toBeDefined();
    // eslint-disable-next-line testing-library/await-async-query
    expect(component.root.findByType("div")).toBeDefined();
  });
});
