import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import BookDetails from "./BookDetails";
import { Typography } from "@mui/material";

describe("Testing Book Details Molecule", () => {
  it("should match the unButtoned BookDetails snapshot", () => {
    const { container } = render(
      <BookDetails
        time="13"
        bookAuthor={"Jim Collins & Bill Lazier"}
        bookTitle="Beyond Entrepreneurship"
        isButtoned={false}
        isHovered={false}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should match the buttoned snapshot", () => {
    const { container } = render(
      <BookDetails
        time="13"
        bookAuthor={"Jim Collins & Bill Lazier"}
        bookTitle="Beyond Entrepreneurship"
        isButtoned={true}
        isHovered={false}
      />
    );
    expect(container).toMatchSnapshot();
  });
});