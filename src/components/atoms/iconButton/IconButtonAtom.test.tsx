import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {ReactComponent as EntrepreneurshipIcon} from '../../../../public/assets/Vector.svg';

import IconButton from './IconButtonAtom';

describe('Testing Icon Button Atom', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<IconButton iconComponent={EntrepreneurshipIcon}/>,);
        expect(container).toMatchSnapshot();
    })
})