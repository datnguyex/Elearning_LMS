import React from 'react';
import { DoubleArrow, ICircle } from '~/assets/Icons/Icons';
import { ClassesProps } from '~/types/ClassList/ClassesProp';

const Classes: React.FC<ClassesProps> = ({ classes, subject, typeClass, ElementQuantity }) => {
    const classEntries = Object.keys(classes).slice(0, ElementQuantity);

    return (
        <div className="w-full border border-[#F0F3F6] mt-3 rounded">
            {/* Header */}
            <div className="h-[30px] w-full bg-gradient-to-l from-[#ff5400] to-[#f17f21] rounded overflow-hidden flex">
                <div className="w-[18%] h-full flex items-center justify-center">
                    <div className="text-white text-lg font-bold font-Mulishtracking-tight">Mã lớp</div>
                </div>
                <div className="w-[18%] h-full flex items-center cursor-pointer justify-center">
                    <div className="text-white text-lg font-bold font-Mulishtracking-tight">Môn học</div>
                    <DoubleArrow />
                </div>
                <div className="w-[18%] h-full flex items-center cursor-pointer justify-center">
                    <div className="text-white text-lg font-bold font-Mulishtracking-tight">Thời gian</div>
                    <DoubleArrow />
                </div>
                <div className="w-[18%] h-full flex items-center cursor-pointer justify-center">
                    <div className="text-white text-lg font-bold font-Mulishtracking-tight">Giảng viên</div>
                    <DoubleArrow />
                </div>
                <div
                    className={`w-[18%] h-full flex items-center cursor-pointer justify-center ${typeClass === 2 ? 'opacity-0' : 'opacity-1'}`}
                >
                    <div className="text-white text-lg font-bold font-Mulishtracking-tight">Trạng thái</div>
                    <DoubleArrow />
                </div>
            </div>

            {/* Class Items */}
            {classEntries.map((key: any, index) => {
                const classItem = classes[key];
                const isEven = index % 2 !== 0; // Check if it's an even index

                return (
                    <div
                        key={index}
                        className={`h-[40px] w-full rounded overflow-hidden flex ${isEven ? 'bg-[#F0F3F6]' : 'bg-[#fff]'}`}
                    >
                        <div className="w-[18%] h-full flex items-center justify-center">
                            <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">
                                {classItem.classCode}
                            </div>
                        </div>

                        <div className="w-[18%] h-full flex items-center justify-center pr-[10px]">
                            <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">
                                {subject}
                            </div>
                        </div>

                        <div className="w-[18%] h-full flex flex-col items-center justify-start">
                            <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">{`Thứ ${classItem.day} - ${classItem.time}`}</div>
                            <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight w-[40%]">
                                {classItem.dateStart}
                            </div>
                        </div>

                        <div className="w-[18%] h-full flex items-center justify-center">
                            <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">{`GV. ${classItem.teacher}`}</div>
                        </div>

                        <div
                            className={`w-[18%] h-full flex items-center justify-center ${typeClass === 2 ? 'opacity-0' : 'opacity-1'}`}
                        >
                            <div
                                className={`h-auto w-[50%] py-2 rounded justify-start items-center gap-2.5 inline-flex ${classItem.status ? 'bg-[#ff7506] cursor-pointer' : 'bg-[#888] cursor-default'}`}
                            >
                                <div className="w-[132px] text-center text-white text-base font-bold font-['Source Sans Pro'] tracking-tight">
                                    Bắt đầu
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 h-full flex items-center justify-center">
                            <ICircle />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Classes;
