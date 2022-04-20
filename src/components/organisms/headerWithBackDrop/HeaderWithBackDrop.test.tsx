import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import HeaderWithBackDrop from "./HeaderWithBackDrop";

describe("Testing Header with back drop", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<HeaderWithBackDrop />);
    expect(container).toMatchSnapshot();
  });

  it("should open the dropdown", () => {
    const { container } = render(<HeaderWithBackDrop />);
    fireEvent.click(screen.getByText("Explore"));
    expect(screen.getByText("Entrepreneurship")).toBeInTheDocument();
  });
});
