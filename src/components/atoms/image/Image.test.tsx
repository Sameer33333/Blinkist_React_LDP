import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Image from './Image';
import coverImage from "../../../../public/assets/images/coverImage.png";


describe('Testing ImageAtom', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<Image source={coverImage}/>,);
        expect(container).toMatchSnapshot();
    })
})