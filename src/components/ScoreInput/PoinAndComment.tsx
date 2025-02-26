import { ICircle, Upaperclip } from 'src/assets/Icons/Icons';
import ActionButton from '../Button/ActionButton';

function PoinAndComment() {
    return (
        <>
            <div className="flex items-center ml-10">
                <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight w-[50%]">Ngày nộp bài:</div>
                <div className="text-[#373839] text-lg font-semibold font-Mulish tracking-tight">20/10/2020</div>
            </div>
            <div className="flex items-center ml-10">
                <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight w-[50%]"></div>
                <div className="text-[#373839] text-lg font-semibold font-Mulish tracking-tight">13:00</div>
            </div>
            <div className="flex items-center ml-10">
                <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight w-[50%]">
                    Thời gian làm bài:
                </div>
                <div className="text-[#373839] text-lg font-semibold font-Mulish tracking-tight">13m45s</div>
            </div>
            <div className="w-[85%] h-[0px] border border-[#c8c4c0] mt-8 mx-auto"></div>
            <div className="text-[#373839] text-lg font-semibold font-Mulish pt-8 tracking-tight ml-10 ">
                Tệp đính kèm của học viên:
            </div>
            <div className="cursor-pointer w-[65%] h-8 bg-[#efefef] rounded overflow-hidden flex items-center ml-10 mt-3">
                <div className="h-full flex items-center px-2">
                    <Upaperclip color={'#ff7506'} width={'15px'} height={'15px'} />
                </div>
                <div className="w-[0.5px] h-[65%] bg-[#C9C4C0]"></div>
                <div className="px-2 text-right text-[#373839] text-base font-normal font-sourceSansPro leading-tight ">
                    DSTT_KT45P_12A1.doc
                </div>
            </div>
            <div className="w-[85%] h-[0px] border border-[#c8c4c0] mt-8 mx-auto"></div>
            <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight  ml-10 mt-8">Điểm số:</div>
            <div className="w-[80%] h-12 bg-white rounded-lg border border-[#2dacee] ml-10 mt-3 pl-3">
                <input
                    type="text"
                    className="w-full h-full outline-none bg-transparent text-[#373839] text-2xl font-bold font-Source Sans Pro tracking-tight"
                />
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
                <ICircle width={'10px'} height={'10px'} />
                <div className="opacity-50 text-[#373839] text-sm font-normal font-sourceSansPro">
                    Điểm số được tính theo thang điểm 10.{' '}
                </div>
            </div>
            <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight ml-10 mt-14">Nhận xét:</div>
            <textarea className="w-[80%] flex justify-center h-40 bg-white rounded-lg border border-[#c8c4c0] mx-auto mt-3 pl-3 outline-none resize-non"></textarea>
            <div className="w-[40%] float-right mr-10 mt-14">
                <ActionButton content="Lưu điểm" bgColor="#ff7506" textColor="white" />
            </div>
        </>
    );
}

export default PoinAndComment;
