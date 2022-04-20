import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ExploreBooksBanner from "./ExploreBooksBanner";
import { Typography } from "@mui/material";
import BookImage from "../../../media/coverImage.png";

describe("Testing Explore Banner", () => {
  it("should match the Explore Banner snapshot", () => {
    const { container } = render(<ExploreBooksBanner />);
    expect(container).toMatchSnapshot();
  });
});
