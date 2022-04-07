import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ReactComponent as SearchIcon} from '../../../images/searchIcon.svg';


import IconButtonAtom from './IconButtonAtom';

export default {
  title: 'atoms/Icon Button',
  component: IconButtonAtom,
} as ComponentMeta<typeof IconButtonAtom>;

export const SearchButton: ComponentStory<typeof IconButtonAtom> = () => <IconButtonAtom iconComponent={SearchButton}/>;