export type CustomClickProps = {
    stylez: React.CSSProperties;
    icon: React.ReactNode;
    onPrevClick: (sliderRef: any) => void;
    onNextClick: (sliderRef: any) => void;
    sliderRef: React.RefObject<any>;
};
