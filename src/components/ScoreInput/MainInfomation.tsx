import { Upaperclip } from 'src/assets/Icons/Icons';
import DropdownSelector from '../ClassList/DropdownSelector';

function MainInfomation() {
    return (
        <>
            {/* //item */}
            <div className="flex items-center mx-7">
                <div className="text-[#373839] text-lg font-bold font-Mulishtracking-tight w-[30%]">Môn học: </div>
                <div className="text-[#373839] text-lg font-semibold font-Mulishtracking-tight">Ngữ Văn</div>
            </div>
            {/* //item */}
            <div className="flex items-center mx-7">
                <div className="text-[#373839] text-lg font-bold font-Mulishtracking-tight w-[30%]">Lớp: </div>
                <div className="text-[#373839] text-lg font-semibold font-Mulishtracking-tight">10C1</div>
            </div>
            {/* //item */}
            <div className="flex items-center mx-7">
                <div className="text-[#373839] text-lg font-bold font-Mulishtracking-tight w-[30%]">Thời gian: </div>
                <div className="flex items-center gap-3">
                    <div className="text-[#373839] text-lg font-semibold font-Mulishtracking-tight">
                        Thứ 6, 20/10/2020
                    </div>
                    <div className="text-[#373839] text-lg font-semibold font-Mulishtracking-tight">13:00</div>
                </div>
            </div>
            {/* //item */}
            <div className="flex items-center mx-7">
                <div className="text-[#373839] text-lg font-bold font-Mulishtracking-tight w-[30%]">Phân loại: </div>
                <div className="text-[#373839] text-lg font-semibold font-Mulishtracking-tight">KT 15 phút</div>
            </div>
            {/* //item */}
            <div className="flex items-center mx-7">
                <div className="text-[#373839] text-lg font-bold font-Mulishtracking-tight w-[30%]">Đề bài:</div>
                <div className="text-[#373839] text-lg font-semibold font-Mulishtracking-tight">
                    Lorem ipsum dolor sit amet
                </div>
            </div>
            {/* //item */}
            <div className="flex items-center mx-7">
                <div className="text-[#373839] italic text-sm font-normal font-sourceSansPro w-[30%]">
                    File đính kèm:
                </div>
                <div className="cursor-pointer w-[50%] h-8 bg-[#efefef] rounded overflow-hidden flex items-center">
                    <div className="h-full flex items-center px-2">
                        <Upaperclip color={'#ff7506'} width={'15px'} height={'15px'} />
                    </div>
                    <div className="w-[0.5px] h-[65%] bg-[#C9C4C0]"></div>
                    <div className="px-2 text-right text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        DSTT_KT45P_12A1.doc
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainInfomation;
