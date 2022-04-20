import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BookView from "./BookView";
import { Typography } from "@mui/material";
import BookImage from "../../../../public/assets/images/coverImage.png";

describe("Testing Book View Molecule", () => {
  it("should match the Book View snapshot", () => {
    const { container } = render(
      <BookView
        time="13"
        bookAuthor={"Jim Collins & Bill Lazier"}
        bookTitle="Beyond Entrepreneurship"
        bookDesc="Turning Your Business into an Enduring Great Company"
        coverImage="Entrepreneurship.png"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should call on click method of button", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <BookView
        time="13"
        bookAuthor={"Jim Collins & Bill Lazier"}
        bookTitle="Beyond Entrepreneurship"
        bookDesc="Turning Your Business into an Enduring Great Company"
        coverImage="Entrepreneurship.png"
        onClick={handleClick}
      />
    );
    fireEvent.click(screen.getByText("Finished Reading"));
    expect(handleClick).toHaveBeenCalled();
  });
});