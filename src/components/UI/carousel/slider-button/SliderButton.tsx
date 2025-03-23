import { forwardRef } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

interface SliderButtonProps {
    direction: 'left' | 'right';
    disabled?: boolean;
}

export const SliderButton = forwardRef<HTMLButtonElement, SliderButtonProps>(
    ({ direction, disabled }, ref) => {
        return (
            <button
                ref={ref}
                className={`absolute top-1/2 z-10 -translate-y-1/2 
                p-2 bg-black/50 rounded-full transition-all 
                hover:bg-black/70 active:bg-black/90 
                disabled:opacity-30 disabled:cursor-not-allowed 
                ${direction === 'left' ? 'left-2' : 'right-2'}`}
                disabled={disabled}
            >
                {direction === 'left' ? (
                    <GoArrowLeft className="text-white w-6 h-6" />
                ) : (
                    <GoArrowRight className="text-white w-6 h-6" />
                )}
            </button>
        );
    }
);

SliderButton.displayName = 'SliderButton';