import React from "react";
import CustomButton from "../button/CustomButton";
interface Props {
  btnText?: string;
  isHovered?: boolean;
  startIcon?: React.ReactNode;
}
const CardButton = (props: Props) => {
  const { btnText, startIcon, isHovered } = props;
  let backgroundColor = "white";
  let textColor = "secondary.main";
  if (isHovered) {
    backgroundColor = "secondary.main";
    textColor = "white";
  }
  return (
    <div>
      <CustomButton
        variant="contained"
        width="284px"
        textColor={textColor}
        backgroundColor={backgroundColor}
        hoverTextColor="white"
        hoverBackGroundColor="secondary.main"
        startIcon={startIcon}
        size="large"
      >
        {btnText}
      </CustomButton>
    </div>
  );
};
export default CardButton;
