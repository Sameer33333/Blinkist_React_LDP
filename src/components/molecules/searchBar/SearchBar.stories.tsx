import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from './SearchBar';

export default {
  title: 'atoms/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const Primary: ComponentStory<typeof SearchBar> = () => <SearchBar/>;