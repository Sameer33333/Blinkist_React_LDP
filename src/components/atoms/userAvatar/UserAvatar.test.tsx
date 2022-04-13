import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import AccountAvatar from "./UserAvatar";

describe("Testing Account Avatar", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<AccountAvatar initials="A" />);
    expect(container).toMatchSnapshot();
  });
});