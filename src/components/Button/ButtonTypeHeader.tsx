import React from 'react';

interface ButtonTypeHeaderProps {
    value: number;
    currentType: number;
    handleType: (value: number) => void;
    label: string;
}

const ButtonTypeHeader: React.FC<ButtonTypeHeaderProps> = ({ value, currentType, handleType, label }) => {
    return (
        <div
            onClick={() => handleType(value)}
            className={`w-[9%] h-full rounded-tl-lg rounded-tr-lg text-lg font-bold font-Mulish tracking-tight px-[5px] py-2 flex items-center justify-center text-center cursor-pointer ${
                currentType === value
                    ? 'bg-gradient-to-l from-[#ff5400] to-[#f17f21] text-[#f2f2f2]'
                    : 'bg-[white] border border-[#ff5400] text-[#373839]'
            }`}
        >
            {label}
        </div>
    );
};

export default ButtonTypeHeader;
