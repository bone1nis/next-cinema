import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import Icon from './chevron.svg';

export const SliderButton = forwardRef<HTMLButtonElement>(
    (_, ref) => (
        <button
            className='test'
            ref={ref}
        >
            <Icon name="chevron" />
        </button>
    )
);
