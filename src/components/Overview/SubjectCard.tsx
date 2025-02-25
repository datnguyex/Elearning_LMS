import React from 'react';
import { ArrowWhite, ICircle } from 'src/assets/Icons/Icons';
import { motion } from 'framer-motion';

interface Subject {
    name: string;
    class: string;
    time: string;
    day: string;
    dayStart: string;
    dayEnd: string;
    status: boolean;
}

interface SubjectCardProps {
    id: number;

    subjects: Subject[];
    activeCourses: number[]; // Nhận activeCourses từ props
    handleDisplayCourse: (courseId: number) => void; // Nhận handleDisplayCourse từ props
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subjects, activeCourses, handleDisplayCourse, id }) => {
    return (
        <motion.div
            animate={{ height: activeCourses.includes(id) ? '370px' : '40px' }}
            transition={{ duration: 0.1 }}
            className={`w-[100%] ${activeCourses.includes(id) ? 'h-[370px]' : 'h-[40px]'}  rounded-lg mt-3 overflow-hidden shadow-semesterTable`}
        >
            <div
                onClick={() => handleDisplayCourse(id)} // Gọi hàm handleDisplayCourse khi click
                className={`flex pl-2 opacity-80 items-center justify-start cursor-pointer w-full h-[40px] ${activeCourses.includes(id) ? 'bg-gradient-to-r from-[#ff5400] to-[#f17f21]' : 'bg-[#ffffff]'}`}
            >
                <div
                    className={`transform transition-transform duration-300 ${activeCourses.includes(id) ? 'rotate-[-90deg]' : ''}`}
                >
                    <ArrowWhite
                        color={activeCourses.includes(id) ? 'white' : '#FF7506'} // Truyền màu vào tùy theo điều kiện
                    />
                </div>
                <div
                    className={`text-lg font-extrabold font-['Mulish'] tracking-tight ${activeCourses.includes(id) ? 'text-white' : 'text-[#373839]'}`}
                >
                    Học kỳ II - 2020
                </div>
            </div>

            {/* Hiển thị các môn học */}
            {subjects.map((subject, index) => (
                <div
                    key={index}
                    className={`flex h-[40px] items-center justify-around ${index % 2 != 0 ? 'bg-[#f0f3f6]' : ''}`}
                >
                    <div className="w-[12%] text-[#373839] text-base font-bold font-['Source Sans Pro'] tracking-tight">
                        {subject.name}
                    </div>
                    <div className="w-[12%] text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                        Lớp {subject.class}
                    </div>
                    <div className="w-[12%] text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                        Thứ {subject.day} - {subject.time}
                    </div>
                    <div className="w-[12%] text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                        {subject.dayStart} - {subject.dayEnd}
                    </div>
                    <div
                        className={`w-[12%] italic text-base font-normal font-['Source Sans Pro'] ${subject.status ? 'text-[#0a7feb]' : 'text-[#ed2025]'}`}
                    >
                        {subject.status ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                    </div>
                    <div className="w-[12%] overflow-hidden">
                        <ICircle />
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default SubjectCard;
