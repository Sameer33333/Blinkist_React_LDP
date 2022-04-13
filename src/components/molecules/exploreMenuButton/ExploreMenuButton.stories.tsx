import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactComponent as EntrepreneurshipIcon } from "../../../images/Vector.svg";
import ExploreMenuButton from "./ExploreMenuButton";

export default {
  title: "molecules/Explore Menu Buttons",
  component: ExploreMenuButton,
} as ComponentMeta<typeof ExploreMenuButton>;

export const Primary: ComponentStory<typeof ExploreMenuButton> = () => (
  <ExploreMenuButton
    iconComponent={EntrepreneurshipIcon}
    buttonText="Entrepreneurship"
  />
);