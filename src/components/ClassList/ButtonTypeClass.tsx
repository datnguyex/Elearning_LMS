import React from 'react';

interface ButtonTypeClassProps {
    value: number;
    currentTypeClass: number;
    handleTypeClass: (value: number) => void;
    label: string;
}

const ButtonTypeClass: React.FC<ButtonTypeClassProps> = ({ value, currentTypeClass, handleTypeClass, label }) => {
    return (
        <div
            onClick={() => handleTypeClass(value)}
            className={`w-[9%] h-full rounded-tl-lg rounded-tr-lg text-lg font-bold font-Mulish tracking-tight px-[5px] py-2 flex items-center justify-center text-center cursor-pointer ${
                currentTypeClass === value
                    ? 'bg-gradient-to-l from-[#ff5400] to-[#f17f21] text-[#f2f2f2]'
                    : 'bg-[white] border border-[#ff5400] text-[#373839]'
            }`}
        >
            {label}
        </div>
    );
};

export default ButtonTypeClass;
