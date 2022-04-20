import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookInfoTabs from "./BookInfoTabs";

describe("Testing Book Info Tabs", () => {
  it("should match the Book Info Tabs snapshot", () => {
    const { container } = render(<BookInfoTabs />);
    expect(container).toMatchSnapshot();
  });
});
