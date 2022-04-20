import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExploreMenuButton from "./ExploreMenuButton";
import { Typography } from "@mui/material";
import { ReactComponent as EntrepreneurshipIcon } from "../../../../public/assets/Vector.svg";

describe("Testing Explore Banner", () => {
  it("should match the Explore Banner snapshot", () => {
    const { container } = render(
      <ExploreMenuButton
        iconComponent={EntrepreneurshipIcon}
        buttonText="Entrepreneurship"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call on click method of button", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ExploreMenuButton
        iconComponent={EntrepreneurshipIcon}
        buttonText="Entrepreneurship"
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByText("Entrepreneurship"));
    expect(handleClick).toHaveBeenCalled();
  });
});