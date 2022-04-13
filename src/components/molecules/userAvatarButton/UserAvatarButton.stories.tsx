import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import coverImage from "../../../images/coverImage.png";

import AvatarButton from "./UserAvatarButton";

export default {
  title: "molecules/User Avatar Button",
  component: AvatarButton,
} as ComponentMeta<typeof AvatarButton>;

const Template: ComponentStory<typeof AvatarButton> = (args) => (
  <AvatarButton {...args} />
);

export const Primary: ComponentStory<typeof AvatarButton>  = Template.bind({});