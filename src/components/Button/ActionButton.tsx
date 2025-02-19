import React from 'react';

// Định nghĩa kiểu cho props
interface ActionButtonProps {
    content: string; // Nội dung của nút (ví dụ: "Hủy" hoặc "Lưu")
    bgColor: string; // Màu nền của nút (ví dụ: "bg-[#F2F2F2]" hoặc "bg-[#FF7506]")
    textColor: string; // Màu chữ của nút (ví dụ: "#373839" hoặc "white")
}

const ActionButton: React.FC<ActionButtonProps> = ({ content, bgColor, textColor }) => {
    return (
        <div
            className={`cursor-pointer h-[30px] px-5 py-1.5 justify-center items-center gap-2.5 inline-flex rounded w-[100%] ${bgColor}`}
        >
            <div className={`text-${textColor} text-lg font-bold font-Mulish tracking-tight`}>{content}</div>
        </div>
    );
};

export default ActionButton;
