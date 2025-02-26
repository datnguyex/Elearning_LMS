import React from 'react';

interface ActionButtonProps {
    content: string;
    bgColor: string;
    textColor: string;
    height?: string;
    borderColor?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
    content,
    bgColor,
    textColor,
    height = '30px',
    borderColor = 'transparent',
}) => {
    console.log('height', height);

    const borderStyle =
        borderColor !== 'transparent'
            ? {
                  borderColor,
                  borderWidth: '1px',
                  borderStyle: 'solid',
              }
            : {};

    return (
        <div
            className="cursor-pointer px-5 py-1.5 justify-center items-center gap-2.5 inline-flex rounded w-[100%]"
            style={{
                backgroundColor: bgColor,
                color: textColor,
                height,
                ...borderStyle,
            }}
        >
            <div className="text-lg font-bold font-Mulish tracking-tight">{content}</div>
        </div>
    );
};

export default ActionButton;
