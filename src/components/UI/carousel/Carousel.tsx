import { useCallback, useRef, type ReactNode } from 'react';

import { SliderButton } from './slider-button/SliderButton';
import { useDomRefWithSetter } from './lib/use-fom-ref-with-setter';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

export const Carousel = <T,>({ items, renderItem }: CarouselProps<T>) => {
    const [nextEl, nextElRef] = useDomRefWithSetter<HTMLButtonElement>();
    const [prevEl, prevElRef] = useDomRefWithSetter<HTMLButtonElement>();

    const renderItems = useCallback(
        (_items: T[]) =>
            _items.map((item, idx) => (
                <SwiperSlide
                    key={idx}
                    className='m-1'
                >
                    {renderItem(item, idx)}
                </SwiperSlide>
            )),
        [renderItem]
    );

    const swiperOptions = {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        modules: [Navigation],
        className: 'w-full'
    };

    return (
        <Swiper
            {...swiperOptions}
            navigation={{
                prevEl,
                nextEl
            }}>
            <SliderButton ref={prevElRef} direction='left' />
            <SliderButton ref={nextElRef} direction='right' />
            {renderItems(items)}
        </Swiper>
    );
};