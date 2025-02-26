import { Icon } from 'leaflet';
import React from 'react';
import { Link } from 'react-router-dom';
import { DoubleArrow, ICircle } from 'src/assets/Icons/Icons';
import { ClassesProps } from 'src/types/ClassList/ClassesProp';
import ActionButton from '../Button/ActionButton';

const Classes: React.FC<ClassesProps> = ({
    classes,
    subject = '',
    typeClass,
    ElementQuantity,
    headerTable,
    Listicon,
    type,
}) => {
    const classEntries = Object.keys(classes).slice(0, ElementQuantity);

    return (
        <div className="w-full border border-[#F0F3F6] mt-3 rounded">
            {/* Header */}
            <div className="h-[30px] w-full bg-gradient-to-l from-[#ff5400] to-[#f17f21] rounded overflow-hidden flex">
                {headerTable.map((header, index) => (
                    <div
                        key={index}
                        className={`flex-1 flex items-center justify-center ${header.isVisible ? 'opacity-1' : 'opacity-0'}`}
                    >
                        <div className="text-white  text-lg font-bold font-Mulishtracking-tight">{header.title}</div>
                        <div className=" cursor-pointer">{header.isVisible && header.icon}</div>
                    </div>
                ))}
                <div className="flex-1 opacity-0 flex items-center  justify-center">
                    <div className="text-white text-lg font-bold font-Mulishtracking-tight">Giảng viên</div>
                    <DoubleArrow />
                </div>
            </div>

            {/* table Items */}
            {type === 'classList' ? (
                classEntries.map((key: any, index: number) => {
                    const classItem = classes[key];
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`h-[40px] w-full rounded overflow-hidden flex ${isEven ? 'bg-[#F0F3F6]' : 'bg-[#fff]'}`}
                        >
                            {/* Mã lớp */}
                            <div className="flex-1 h-full flex items-center justify-center">
                                <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">
                                    {classItem.classCode}
                                </div>
                            </div>

                            {/* Môn học */}
                            <div className="flex-1 h-full flex items-center justify-center pr-[10px]">
                                <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">
                                    {subject}{' '}
                                    {/* subject có thể được truyền từ bên ngoài hoặc là một giá trị cố định */}
                                </div>
                            </div>

                            {/* Thời gian học */}
                            <div className="flex-1 h-full flex flex-col items-center justify-start">
                                <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">
                                    {`Thứ ${classItem.day} - ${classItem.time}`}
                                </div>
                                <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight w-[40%]">
                                    {classItem.dateStart}
                                </div>
                            </div>

                            {/* Tên giáo viên */}
                            <div className="flex-1 h-full flex items-center justify-center">
                                <div className="text-[#373839] text-lg font-normal font-Mulishtracking-tight">
                                    {`GV. ${classItem.teacher}`}
                                </div>
                            </div>

                            {/* Nút "Bắt đầu" */}
                            <div
                                className={`flex-1 h-full flex items-center justify-center ${typeClass === 2 ? 'opacity-0' : 'opacity-1'}`}
                            >
                                <div
                                    className={`h-auto w-[50%] py-2 rounded justify-start items-center gap-2.5 inline-flex ${classItem.status ? 'bg-[#ff7506] cursor-pointer' : 'bg-[#888] cursor-default'}`}
                                >
                                    <div className="w-[132px] text-center text-white text-base font-bold font-['Source Sans Pro'] tracking-tight">
                                        Bắt đầu
                                    </div>
                                </div>
                            </div>

                            {/* Link đến quản lý lớp */}
                            <Link to={'/class-manage'} className="flex-1 h-full flex items-center justify-center">
                                {Listicon.map((key: any, index: number) => {
                                    return <div key={index}>{key}</div>;
                                })}
                            </Link>
                        </div>
                    );
                })
            ) : type === 'examList' ? (
                classEntries.map((key: any, index: number) => {
                    const classItem = classes[key];
                    const isEven = index % 2 === 0;

                    return (
                        <div
                            key={index}
                            className={`h-[40px] w-full rounded overflow-hidden flex ${isEven ? 'bg-[#F0F3F6]' : 'bg-[#fff]'}`}
                        >
                            {/* Mã lớp */}
                            <div className="flex-1 h-full flex items-center justify-center ">
                                <div className="text-[#373839] min-w-[30%]  text-lg font-normal font-Mulishtracking-tight">
                                    {classItem.class}
                                </div>
                            </div>

                            {/* Môn học */}
                            <div className="flex-1 h-full flex items-center justify-center pr-[10px]">
                                <div className="text-[#373839]  min-w-[30%] text-lg font-normal font-Mulishtracking-tight">
                                    {classItem.exam_type}
                                </div>
                            </div>
                            <div className="flex-1 h-full flex items-center justify-center ">
                                <div className="text-[#373839]  min-w-[40%] text-lg font-normal font-Mulishtracking-tight">
                                    {subject}
                                </div>
                            </div>
                            {/* Thời gian học */}
                            <div className="flex-1 h-full flex flex-col items-center justify-start">
                                <div className="text-[#373839]  min-w-[30%] text-lg font-normal font-Mulishtracking-tight">
                                    {`Thứ ${classItem.exam_day} - ${classItem.dateStart}`}
                                </div>
                                <div className="text-[#373839]  min-w-[30%] text-lg font-normal font-Mulishtracking-tight w-[40%]">
                                    {classItem.time}
                                </div>
                            </div>

                            {/* Tên giáo viên */}
                            <div className="flex-1 h-full flex items-center justify-center">
                                <div className="text-[#373839]  min-w-[30%] text-lg font-normal font-Mulishtracking-tight">
                                    {`${classItem.duration}`}
                                </div>
                            </div>
                            {/* Nút "Bắt đầu" */}
                            <div
                                className={`flex-1 h-full flex items-center justify-center ${typeClass === 2 ? 'opacity-0' : 'opacity-1'}`}
                            >
                                {classItem.status === 1 ? (
                                    <div className="text-[#ed2025] italic text-base font-normal font-['Source Sans Pro']">
                                        Chưa bắt đầu
                                    </div>
                                ) : classItem.status === 2 ? (
                                    <div className="text-[#0a7feb] italic text-base font-normal font-['Source Sans Pro']">
                                        Đang tiến hành
                                    </div>
                                ) : (
                                    <div className="text-[#49c40f] italic text-base font-normal font-['Source Sans Pro']">
                                        Đã kết thúc
                                    </div>
                                )}
                            </div>
                            {/* Nút "Bắt đầu" */}
                            <div
                                className={`flex-1 h-full flex items-center justify-center ${typeClass === 2 ? 'opacity-0' : 'opacity-1'}`}
                            >
                                <div className="w-[60%]">
                                    {classItem.status === 1 ? (
                                        <ActionButton
                                            content={'Bắt đầu'}
                                            bgColor={'#ff7506'}
                                            textColor={'white'}
                                            height={'25px'}
                                        />
                                    ) : classItem.status === 2 ? (
                                        <ActionButton
                                            content={'Chấm điểm'}
                                            bgColor={'transparent'}
                                            textColor={'#c8c4c0'}
                                            height={'25px'}
                                            borderColor={'#c8c4c0'}
                                        />
                                    ) : (
                                        <ActionButton
                                            content={'Nhập điểm'}
                                            bgColor={'#ffb923'}
                                            textColor={'#ffff'}
                                            height={'25px'}
                                        />
                                    )}
                                </div>
                            </div>
                            {/* Link đến quản lý lớp */}
                            <Link to={'/class-manage'} className="flex-1 h-full flex items-center justify-center">
                                {Listicon.map((key: any, index: number) => {
                                    return <div key={index}>{key}</div>;
                                })}
                            </Link>
                        </div>
                    );
                })
            ) : (
                <></>
            )}
        </div>
    );
};

export default Classes;
