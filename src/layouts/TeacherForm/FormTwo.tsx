import { DatePicker } from 'antd';
import React from 'react';
import { CalendarOrange } from 'src/assets/Icons/Icons';
interface FormTwoProps {
    type?: string;
    children: React.ReactNode;
}
function FormTwo({ children, type }: FormTwoProps) {
    const childrenArray = React.Children.toArray(children);
    return (
        <>
            <div className="w-full py-5  bg-[#f0f3f6]">
                <div className="w-[45%] ml-[17%] h-full flex flex-col gap-5">
                    {/* duration */}
                    <div className="w-full flex justify-start items-center">
                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                            Thời lượng
                        </div>
                        <div className="w-[60%] flex items-center relative z-[10]">
                            {/* //item1 */}
                            <div className="w-[50%] flex items-center justify-between gap-2">
                                <div className="w-[65%] flex justify-center items-center h-full">
                                    {childrenArray[0]}
                                </div>
                                <div className="text-[#373839] flex-1 flex items-center justify-start text-base font-normal font-['Source Sans Pro'] leading-tight">
                                    Giờ
                                </div>
                            </div>
                            {/* //item2 */}
                            <div className="w-[50%] flex items-center justify-between gap-2">
                                <div className="w-[65%] flex justify-center items-center h-full">
                                    {childrenArray[1]}
                                </div>
                                <div className="text-[#373839] flex-1 flex items-center justify-start text-base font-normal font-['Source Sans Pro'] leading-tight">
                                    Phút
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* date start */}
                    <div className="w-full flex justify-start items-center">
                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                            Ngày bắt đầu
                        </div>

                        <div className="w-[60%] flex items-center relative z-[9]">
                            {/* //item1 */}
                            <div className="w-[50%] flex items-center justify-between gap-2 ">
                                <div className="w-[87%] flex  items-center h-full">
                                    <div className="datePicker-addClassSchedule">
                                        <DatePicker
                                            placement="bottomLeft"
                                            format="DD/MM/YYYY"
                                            size="small"
                                            placeholder="DD/MM/YYYY"
                                            suffixIcon={<CalendarOrange />} // Custom icon
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* //item2 */}
                            <div className="w-[50%] flex items-center justify-between gap-2">
                                <div className="w-[65%] flex justify-center items-center h-full">
                                    {childrenArray[2]}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //filter */}
                    {type == 'AddExam' ? (
                        <div className="w-full flex justify-start items-center">
                            <div className="w-[20%] text-[#373839] text-base font-normal font-sourceSansPro italic">
                                Phân loại
                            </div>
                            <div className="w-[60%] flex items-center relative z-[9]">
                                {/* //item2 */}
                                <div className="w-[50%] flex items-center justify-between gap-2">
                                    <div className="w-[65%] flex justify-center items-center h-full">
                                        {childrenArray[4]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}

                    {/* date end */}
                    <div className="w-full flex justify-start items-center">
                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                            Ngày kết thúc
                        </div>

                        <div className="w-[60%] flex items-center relative z-[8]">
                            {/* //item1 */}
                            <div className="w-[50%] flex items-center justify-between gap-2 ">
                                <div className="w-[87%] flex justify-start items-center h-full">
                                    <div className="datePicker-addClassSchedule">
                                        <DatePicker
                                            format="DD/MM/YYYY"
                                            size="small"
                                            placeholder="DD/MM/YYYY"
                                            suffixIcon={<CalendarOrange color={'#C9C4C0'} />}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* //item2 */}
                            <div className="w-[50%] flex items-center justify-between gap-2">
                                <div className="w-[65%] flex justify-center items-center h-full">
                                    {childrenArray[3]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormTwo;
