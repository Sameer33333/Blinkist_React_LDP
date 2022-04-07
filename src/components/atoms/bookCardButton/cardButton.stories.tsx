import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import coverImage from "../../../media/coverImage.png";
import BookCardButton from "./cardButton";
import AddIcon from "@mui/icons-material/Add";

export default {
  title: "atoms/Button",
  component: BookCardButton,
} as ComponentMeta<typeof BookCardButton>;

const Template: ComponentStory<typeof BookCardButton> = (args) => (
  <BookCardButton {...args} />
);

export const AddToLibrary = Template.bind({});
export const ReadAgain = Template.bind({});
export const Finished = Template.bind({});

AddToLibrary.args = {
  btnText: "Add to library",
  startIcon: <AddIcon />,
};

ReadAgain.args = {
  btnText: "Read Again",
};

Finished.args = {
  btnText: "Finished",
};
