import React from 'react';
import {Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabPanel from './TabPanel';

export default {
  title: 'atoms/Tab Panel',
  component: TabPanel,
} as ComponentMeta<typeof TabPanel>;

export const Primary: ComponentStory<typeof TabPanel> = () => <TabPanel index={0} value={0}><Typography>Hello World</Typography></TabPanel>;