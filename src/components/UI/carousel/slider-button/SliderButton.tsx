import { forwardRef } from 'react';
import { GoArrowRight } from "react-icons/go";

export const SliderButton = forwardRef<HTMLButtonElement>(
    (_, ref) => (
        <button
            className='test'
            ref={ref}
        >
            <GoArrowRight name="chevron"  />
        </button>
    )
);

SliderButton.displayName = 'SliderButton';