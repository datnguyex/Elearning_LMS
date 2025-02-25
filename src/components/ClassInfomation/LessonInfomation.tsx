import { DatePicker } from 'antd';
import { CalendarOrange } from 'src/assets/Icons/Icons';

export function LessonInfomation() {
    return (
        <div className="flex flex-col gap-3 ml-[24%]">
            {/* //item1 */}
            <div className="flex items-center space-x-4">
                {' '}
                <div className="w-[9%] text-[#373839] text-base font-bold font-sourceSansPro tracking-tight">
                    Lịch học
                </div>
                <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">
                    Tổng số <span className="font-bold">06</span> buổi học
                </div>
            </div>
            {/* //item2 */}
            <div className="flex items-center space-x-4">
                {' '}
                <div className="w-[9%] text-[#373839] text-base font-bold font-sourceSansPro tracking-tight">
                    Ngày bắt đầu
                </div>
                <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">19/08/2020</div>
            </div>
            {/* //item3 */}
            <div className="flex items-center space-x-4">
                {' '}
                <div className="w-[9%] text-[#373839] text-base font-bold font-sourceSansPro tracking-tight">
                    Ngày kết thúc
                </div>
                <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">24/09/2020</div>
            </div>
        </div>
    );
}
export function LessonSubInfomation({ children }: any) {
    return (
        <>
            {' '}
            <div className="flex flex-col gap-3 ml-[24%] ">
                {/* //item1 */}
                <div className="flex items-center space-x-4">
                    {' '}
                    <div className="w-[9.5%] text-[#373839] text-base font-bold font-sourceSansPro tracking-tight">
                        Lịch học
                    </div>
                    <div className="text-[#c8c4c0] text-base font-bold font-sourceSansPro    tracking-tight">
                        Buổi 3
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 ml-[24%] ">
                {/* //item1 */}
                <div className="flex items-center space-x-4">
                    {' '}
                    <div className="w-[9.5%] text-[#373839] text-base font-bold font-sourceSansPro tracking-tight">
                        Ngày kiểm tra
                    </div>
                    <div className="datePicker-joinClassSchedule">
                        <DatePicker
                            format="DD/MM/YYYY"
                            size="small"
                            placeholder="DD/MM/YYYY"
                            suffixIcon={<CalendarOrange />}
                        />
                    </div>
                    <div className="relative z-10 ">{children}</div>
                    <div className="h-8 px-5 py-1.5 justify-center items-center gap-2.5 inline-flex bg-[#FFD8B8] cursor-pointer rounded border border-[#FF7506]">
                        <div className="text-[#373839] text-base font-bold font-['Source Sans Pro'] tracking-tight">
                            Lưu
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
