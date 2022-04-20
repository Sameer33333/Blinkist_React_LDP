import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import FooterList from "./FooterList";
import { Typography } from "@mui/material";
import BookImage from "../../../media/coverImage.png";
import { ReactComponent as EntrepreneurshipIcon } from "../../../media/Vector.svg";

describe("Testing Footer List", () => {
  const list1 = [
    "Book lists",
    "What is Nonfiction?",
    "What to read next?",
    "Benefits of reading",
  ];
  it("should match the Footer List snapshot", () => {
    const { container } = render(
      <FooterList list={list1} heading="Editorial" />
    );
    expect(container).toMatchSnapshot();
  });
});
