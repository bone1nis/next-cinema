import { useCallback, useRef, type ReactNode } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import { FreeMode, Navigation } from 'swiper/modules';
import { SliderButton } from './slider-button/SliderButton';

interface CarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

export const Carousel = <T,>({ items, renderItem }: CarouselProps<T>) => {
    const prevEl = useRef<null | HTMLButtonElement>(null);
    const nextEl = useRef<null | HTMLButtonElement>(null);

    const renderItems = useCallback(
        (_items: T[]) =>
            _items.map((item, idx) => (
                <SwiperSlide
                    key={idx}
                    className='m-4'
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
        pagination: {
            clickable: true,
        },
        modules: [FreeMode, Navigation],
        className: 'w-full'
    };

    return (
        <Swiper
            {...swiperOptions}
            navigation={{
                prevEl,
                nextEl,
            }}>
            <SliderButton ref={prevEl} />
            <SliderButton ref={nextEl} />
            {renderItems(items)}
        </Swiper>
    );
};