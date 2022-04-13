import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
interface Props extends ButtonProps {
  textColor?: string;
  backgroundColor?: string;
  hoverTextColor?: string;
  hoverBackGroundColor?: string;
  width?: string;
  hoverBottomBorder?: string;
  borderRadius?: string | number;
  ml?: string | number;
}
const CustomButton = (props: Props) => {
  const {
    textColor,
    backgroundColor,
    hoverTextColor,
    hoverBackGroundColor,
    children,
    width,
    hoverBottomBorder,
    borderRadius,
    ml,
    ...rest
  } = props;
  return (
    <Button
      sx={{
        width: width,
        color: textColor,
        bgcolor: backgroundColor,
        borderRadius: borderRadius,
        ml: ml,
        "&:hover": {
          color: hoverTextColor,
          bgcolor: hoverBackGroundColor,
          borderBottom: hoverBottomBorder,
        },
        textTransform: "none",
        fontWeight: "bold",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
