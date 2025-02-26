import { Upaperclip } from 'src/assets/Icons/Icons';

function AttachmentBar() {
    return (
        <>
            <div className="cursor-pointer w-[65%] h-8 bg-[#efefef] rounded overflow-hidden flex items-center ml-10 mt-3">
                <div className="h-full flex items-center px-2">
                    <Upaperclip color={'#ff7506'} width={'15px'} height={'15px'} />
                </div>
                <div className="w-[0.5px] h-[65%] bg-[#C9C4C0]"></div>
                <div className="px-2 text-right text-[#373839] text-base font-normal font-sourceSansPro leading-tight ">
                    DSTT_KT45P_12A1.doc
                </div>
            </div>
        </>
    );
}

export default AttachmentBar;
