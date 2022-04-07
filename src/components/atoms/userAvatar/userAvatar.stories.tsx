import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./userAvatar";

export default {
  title: "atoms/UserAvatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar initials="SS" />
);

export const Primary = Template.bind({});
