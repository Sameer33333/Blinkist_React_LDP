import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "./Footer";

export default {
  title: "organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const PageFooter: ComponentStory<typeof Footer> = () => <Footer />;