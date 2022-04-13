import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExploreMenu from "./ExploreMenu";

export default {
  title: "organisms/Explore Menu",
  component: ExploreMenu,
} as ComponentMeta<typeof ExploreMenu>;

export const Primary: ComponentStory<typeof ExploreMenu> = () => (
  <ExploreMenu />
);
