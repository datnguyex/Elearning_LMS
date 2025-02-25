import { CustomClickProps } from 'src/types/Slider/CustomClickProps';

export const onPrevClick = ({ sliderRef }: CustomClickProps) => {
    if (sliderRef.current) {
        sliderRef.current.slickPrev();
    }
};

export const onNextClick = ({ sliderRef }: CustomClickProps) => {
    if (sliderRef.current) {
        sliderRef.current.slickNext();
    }
};
