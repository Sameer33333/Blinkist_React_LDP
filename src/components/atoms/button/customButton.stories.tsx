import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
//import coverImage from "../../../media/coverImage.png";
import CustomButton from "./customButton";
import AddIcon from "@mui/icons-material/Add";
import { typographyClasses } from "@mui/material";

export default {
  title: "atoms/Custom button",
  component: CustomButton,
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => (
  <CustomButton {...args} />
);

export const TextButton = Template.bind({});
export const IconButton = Template.bind({});

TextButton.args = {
  textColor:"rgba(0, 0, 0, 1)",
    backgroundColor: "#2CE080",
    hoverBackGroundColor: "#20BA68",
    width: "129px",
  children: "Add Book"
};

IconButton.args = {
  children: "Add Book",
  startIcon: <AddIcon />,
};
