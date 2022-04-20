import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";
import Icon from "../../atoms/icon/Icon";
import { ReactComponent as ExpandMoreIcon } from "../../../../public/assets/images/expandMore.svg";

describe("Testing Header", () => {
  it("should match the Header snapshot", () => {
    const icon = (
      <Icon
        iconComponent={ExpandMoreIcon}
        color="navTextColors.main"
        width="11px"
        height="6px"
      />
    );
    const { container } = render(<Header btnIcon={icon} />);
    expect(container).toMatchSnapshot();
  });

  it("should call the on click function", () => {
    const handleClick = jest.fn();
    const { container } = render(<Header btnClick={handleClick} />);

    fireEvent.click(screen.getByText("Explore"));
    expect(handleClick).toHaveBeenCalled();
  });
});