/* eslint-disable react/no-array-index-key */
import 'swiper/css';
import { useCallback, type ReactNode } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';

interface CarouselMultiplyProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
}

export const CarouselMultiply = <T,>({ items, renderItem }: CarouselMultiplyProps<T>) => {
    const renderItems = useCallback(
        (_items: T[]) =>
            _items.map((item, idx) => (
                <SwiperSlide
                    key={idx}
                    style={{ marginRight: 'var(--column-gap)' }}
                >
                    {renderItem(item, idx)}
                </SwiperSlide>
            )),
        [renderItem]
    );

    const swiperOptions = {
        slidesPerView: 'auto' as const,
        spaceBetween: 8,
        breakpoints: {
            769: {
                spaceBetween: 15,
            },
            1401: {
                spaceBetween: 18,
            },
        },
    };

    return (
        <Swiper {...swiperOptions}>
            {renderItems(items)}
        </Swiper>
    );
};