import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExploreMenu from "./ExploreMenu";

describe("Testing Explore Menu", () => {
  it("should match the Explore Menu snapshot", () => {
    const { container } = render(<ExploreMenu />);
    expect(container).toMatchSnapshot();
  });

  it("should call on click method of button", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ExploreMenu onClick={handleClick}></ExploreMenu>
    );
    fireEvent.click(screen.getByText("Entrepreneurship"));
    expect(handleClick).toHaveBeenCalled();
  });
});