import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import HeaderWithBackDrop from "./HeaderWithBackDrop";

export default {
  title: "organisms/Header with backdrop",
  component: HeaderWithBackDrop,
} as ComponentMeta<typeof HeaderWithBackDrop>;

export const Primary: ComponentStory<typeof HeaderWithBackDrop> = () => (
  <HeaderWithBackDrop />
);
