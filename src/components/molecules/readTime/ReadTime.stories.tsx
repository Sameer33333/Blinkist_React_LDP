import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReadTime from "./ReadTime";

export default {
  title: "molecules/Read Time",
  component: ReadTime,
} as ComponentMeta<typeof ReadTime>;

const Template: ComponentStory<typeof ReadTime> = (args) => (
  <ReadTime {...args}></ReadTime>
);

export const Primary = Template.bind({});

Primary.args = {
  time: "13",
};
