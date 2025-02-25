import { TeacherImg } from 'src/assets/images';

function TeacherInfomation() {
    return (
        <>
            {/* //item1 */}
            <div className="h-full w-[20%] flex justify-center items-center relative">
                {/* avatar teacher */}
                <img className="w-[27%] aspect-[1] rounded-[50%] object-cover" src={TeacherImg} alt="" />
                <div className="w-[2px] h-[65%] opacity-50 bg-[#C9C4C0] absolute right-0 top-[50%] translate-y-[-50%]"></div>
            </div>
            {/* //info teacher */}
            <div className="w-[20%] h-full flex flex-col justify-center gap-3 relative items-center">
                <div className="flex items-start w-full pr-2 pl-[20%]">
                    <div className="text-[#373839] text-base font-bold font-sourceSansPro tracking-tight w-[30%]">
                        Giáo viên:
                    </div>
                    <div className="text-[#373839] text-base font-normal font-sourceSansPro leading-tight ">
                        Nguyễn Võ Văn A
                    </div>
                </div>
                <div className="flex items-center pr-2 w-full pl-[20%]">
                    <div className="text-[#373839] text-base font-bold font-sourceSansPro tracking-tight w-[30%]">
                        Bộ môn:
                    </div>
                    <div className="text-[#373839] text-base font-normal font-sourceSansPro leading-tight ">
                        Lịch sử
                    </div>
                </div>
                <div className="w-[2px] h-[65%] opacity-50 bg-[#C9C4C0] absolute right-0 top-[50%] translate-y-[-50%]"></div>
            </div>
            {/* //info class */}
            <div className="flex-1 h-full flex flex-col justify-center gap-2 relative">
                <div className="flex items-start w-full pr-2 pl-[5%] mt-2">
                    <div className="text-[#373839] text-base font-bold font-sourceSansPro tracking-tight w-[6%]">
                        Mô tả
                    </div>
                    <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight w-[70%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam placerat, nulla nec tincidunt
                        tincidunt, neque erat bibendum lectu
                    </div>
                </div>
                <div className="flex items-center w-full pr-2 pl-[5%]">
                    <div className="text-[#373839] text-base font-bold font-sourceSansPro tracking-tight w-[6%]">
                        Lớp
                    </div>
                    <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">10A1</div>
                </div>
            </div>
        </>
    );
}

export default TeacherInfomation;
