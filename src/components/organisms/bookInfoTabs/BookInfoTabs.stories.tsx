import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookInfoTabs from "./BookInfoTabs";

export default {
  title: "organisms/Book Info Tabs",
  component: BookInfoTabs,
} as ComponentMeta<typeof BookInfoTabs>;

export const TabLayout: ComponentStory<typeof BookInfoTabs> = () => (
  <BookInfoTabs />
);