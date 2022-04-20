import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';


describe('Testing Search Bar', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<SearchBar/>,);
        expect(container).toMatchSnapshot();
    })
})
