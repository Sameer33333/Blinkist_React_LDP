import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TabPanel from './TabPanel';
import { Typography } from '@mui/material';


describe('Testing Tab Panel', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<TabPanel index={0} value={0}><Typography>Hello World</Typography></TabPanel>,);
        expect(container).toMatchSnapshot();
    })
})