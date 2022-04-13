import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ReactComponent as EntrepreneurshipIcon } from "../../../../public/assets/images/Vector.svg";

import Icon from "./Icon";

describe("Testing Icon Atom", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<Icon iconComponent={EntrepreneurshipIcon} />);
    expect(container).toMatchSnapshot();
  });
});
