import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import FooterList from "./FooterList";

const list1 = [
  "Book lists",
  "What is Nonfiction?",
  "What to read next?",
  "Benefits of reading",
];

export default {
  title: "organisms/Footer List",
  component: FooterList,
} as ComponentMeta<typeof FooterList>;

export const PageFooter: ComponentStory<typeof FooterList> = () => (
  <FooterList list={list1} heading="Editorial" />
);
