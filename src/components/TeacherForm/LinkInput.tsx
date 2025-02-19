import React, { useContext, useRef } from 'react';
import { AddClassContest } from '~/pages/ClassManage/AddClassSchedule/AddClassSchedule';

const LinkInput: React.FC = () => {
    const { linkValue, handleSetLinkValue, handleCopy, inputRef } = useContext(AddClassContest);

    return (
        <>
            <div className="relative w-[60%]">
                <input
                    value={linkValue}
                    ref={inputRef}
                    onChange={(e) => handleSetLinkValue(e.target.value)}
                    className="rounded-lg w-full border border-[#C9C4C0] h-10 outline-none bg-transparent flex-1 px-4 py-4 text-base font-normal font-sourceSansPro leading-tight"
                />
            </div>
            <div
                onClick={handleCopy}
                className="h-8 px-5 py-1.5 justify-center items-center gap-2.5 inline-flex bg-[#FF7506] ml-4 cursor-pointer rounded"
            >
                <div className="text-white text-base font-bold font-['Source Sans Pro'] tracking-tight">Copy link</div>
            </div>
        </>
    );
};

export default LinkInput;
