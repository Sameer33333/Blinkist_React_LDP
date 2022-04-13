import { render, fireEvent, screen } from "@testing-library/react";
import ButtonAtom from "./CustomButton";

describe("Testing Account Avatar", () => {
  it("should match the default snapshot", () => {
    const { container } = render(<ButtonAtom>Click Here</ButtonAtom>);
    expect(container).toMatchSnapshot();
  });

  it("should match the outlined button", () => {
    const { container } = render(
      <ButtonAtom variant="outlined">Click Here</ButtonAtom>
    );
    expect(container).toMatchSnapshot();
  });

  it("should match text snapshot", () => {
    const { container } = render(
      <ButtonAtom variant="text">Click Here</ButtonAtom>
    );
    expect(container).toMatchSnapshot();
  });

  it("should call on click method of button", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ButtonAtom onClick={handleClick}>Click Here</ButtonAtom>
    );
    fireEvent.click(screen.getByText("Click Here"));
    expect(handleClick).toHaveBeenCalled();
  });
});
