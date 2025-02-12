import React from 'react';

interface StatisticItemProps {
    label: string;
    value: number | string;
    textColor: string;
    isLast?: boolean; // Thêm một prop để kiểm tra nếu là phần cuối cùng
}

const StatisticItem: React.FC<StatisticItemProps> = ({ label, value, textColor, isLast }) => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full justify-between">
                <div className="text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                    {label}
                </div>
                <div className={`text-[${textColor}] text-base font-bold font-['Source Sans Pro'] tracking-tight`}>
                    {value}
                </div>
            </div>
            {/* Nếu không phải phần cuối cùng thì mới hiển thị đường kẻ */}
            {!isLast && <div className="h-[2px] bg-[#823b00] mt-1 w-full"></div>}
        </div>
    );
};

export default StatisticItem;
