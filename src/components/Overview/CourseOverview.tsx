import React from 'react';
import { CircleBackgroundOverview } from 'src/assets/Icons/Icons';

// Định nghĩa kiểu cho props
interface CourseOverviewProps {
    colorFrom: string;
    colorTo: string;
    title: string;
    count: number;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ colorFrom, colorTo, title, count }) => {
    return (
        <div
            className="relative w-[37%] h-[50%] rounded-2xl cursor-pointer boxShadow-boxOverview overflow-hidden opacity-90"
            style={{ background: `linear-gradient(to left, ${colorFrom}, ${colorTo})` }}
        >
            <div className="absolute top-0 left-0">
                <CircleBackgroundOverview />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-start gap-2 mt-5">
                <div className="text-white text-lg font-extrabold font-Mulish tracking-tight">{title}</div>
                <div className="text-white text-5xl font-extrabold font-Mulish tracking-wide">{count}</div>
            </div>
            <div className="absolute bottom-0 right-0 transform rotate-180">
                <CircleBackgroundOverview />
            </div>
            <div className="absolute bottom-[-20px] right-[15px] transform rotate-[-90deg] scale-y-[-1]">
                <CircleBackgroundOverview />
            </div>
        </div>
    );
};

export default CourseOverview;
