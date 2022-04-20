import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ReadTime from "./ReadTime";

describe("Testing Footer List", () => {
  it("should match the Time Left snapshot", () => {
    const { container } = render(<ReadTime time="13" />);
    expect(container).toMatchSnapshot();
  });
});