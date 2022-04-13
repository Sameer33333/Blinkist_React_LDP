import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import BookDetails from './BookDetails';

export default {
  title: 'molecules/Book Details',
  component: BookDetails,
} as ComponentMeta<typeof BookDetails>;

const Template : ComponentStory<typeof BookDetails> = (args)=> <BookDetails {...args}></BookDetails>

export const NotButtoned = Template.bind({});
export const Buttoned = Template.bind({});

NotButtoned.args = {
    time:'13',
    bookAuthor:'Jim Collins & Bill Lazier',
    bookTitle:'Beyond Entrepreneurship',
    isButtoned:false
}

Buttoned.args= {
  time:'13',
  bookAuthor:'Jim Collins & Bill Lazier',
  bookTitle:'Beyond Entrepreneurship',
  isButtoned:true,
  btnText:'Finished',
}