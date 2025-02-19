type ArrowProps = {
    stylez: React.CSSProperties;
    icon: React.ReactNode;
    onPrevClick: (sliderRef: any) => void;
    onNextClick: (sliderRef: any) => void;
    sliderRef: React.RefObject<any>;
};

export const CustomArrowNextMenu = ({ stylez, icon, onNextClick, sliderRef }: ArrowProps) => {
    return (
        <div className="customNextBtn" style={stylez} onClick={() => onNextClick({ sliderRef })}>
            {icon}
        </div>
    );
};
export const CustomArrowPrevMenu = ({ stylez, icon, onPrevClick, sliderRef }: ArrowProps) => {
    return (
        <div className="customNextBtn" style={stylez} onClick={() => onPrevClick({ sliderRef })}>
            {icon}
        </div>
    );
};
