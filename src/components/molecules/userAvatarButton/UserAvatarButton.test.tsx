import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserAvatarButton from './UserAvatarButton';
import { Typography } from '@mui/material';


describe('Testing ImageAtom', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<UserAvatarButton />,);
        expect(container).toMatchSnapshot();
    })
    it('should match the Avatar with initial Snapshot',()=>{
        const {container} = render(<UserAvatarButton userName='Sameer Srivastava'/>,);
        expect(container).toMatchSnapshot();
    })
})
