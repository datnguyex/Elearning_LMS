import {
    BookBlurBackground,
    CircleBlurBackground,
    GlobeBlurBackground,
    PencilBlurBackground,
    RectangularBlurBackground,
    SquareRulerBlurBackground,
} from '~/assets/Icons/Icons';

function PositionBackgroundIcons() {
    return (
        <>
            <div className="absolute right-[200px] top-3 opacity-15 ">
                <PencilBlurBackground />
            </div>
            <div className="absolute bottom-[15px] left-[20%] z-0">
                <BookBlurBackground />
            </div>
            <div className="absolute bottom-[17px] left-[10%] z-0 rotate-[110deg]">
                <RectangularBlurBackground />
            </div>
            <div className="absolute bottom-[0] left-[30%] z-0 rotate-[0deg]">
                <CircleBlurBackground />
            </div>
            <div className="absolute z-[0] bottom-2 right-[30%]">
                <SquareRulerBlurBackground />
            </div>
            <div className="absolute z-[0] bottom-2 right-[7%]">
                <GlobeBlurBackground />
            </div>
        </>
    );
}

export default PositionBackgroundIcons;
