import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Footer from "./Footer";
import { Typography } from "@mui/material";
//import BookImage from "../../../media/coverImage.png";
//import { ReactComponent as EntrepreneurshipIcon } from "../../../media/Vector.svg";

describe("Testing Footer", () => {
  it("should match the Footer snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});