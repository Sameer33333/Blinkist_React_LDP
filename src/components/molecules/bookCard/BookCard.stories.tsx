import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import coverImage from "../../../images/coverImage.png";
import EBFBCoverImage from "../../../images/cover_image/EBFB.png"
import AddIcon from "@mui/icons-material/Add";

import BookCard from "./BookCard";

export default {
  title: "organisms/Book Card",
  component: BookCard,
} as ComponentMeta<typeof BookCard>;

const Template: ComponentStory<typeof BookCard> = (args) => (
  <BookCard {...args} />
);

export const unButtoned = Template.bind({});
export const Buttoned = Template.bind({});
export const ButtonedWithIcon = Template.bind({});

unButtoned.args = {
  coverImage: EBFBCoverImage,
  time: "13",
  bookAuthor: "Jim Collins & Bill Lazier",
  bookTitle: "Beyond Entrepreneurship",
  isButtoned: false,
};

Buttoned.args = {
  coverImage: coverImage,
  time: "13",
  bookAuthor: "Jim Collins & Bill Lazier",
  bookTitle: "Beyond Entrepreneurship",
  isButtoned: true,
  btnText: "Finished",
};

ButtonedWithIcon.args = {
  coverImage: coverImage,
  time: "13",
  bookAuthor: "Jim Collins & Bill Lazier",
  bookTitle: "Beyond Entrepreneurship",
  isButtoned: true,
  btnText: "Add to library",
  startIcon: <AddIcon />,
};
