import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookCardButton from "./CardButton";

describe("Testing Book Card Button", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<BookCardButton btnText="Add to library" />);
    expect(container).toMatchSnapshot();
  });

  it("should match the dhover snapshot", () => {
    const { container } = render(
      <BookCardButton btnText="Add to library" isHovered={true} />
    );
    expect(container).toMatchSnapshot();
  });
});