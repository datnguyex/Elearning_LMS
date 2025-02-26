function SubjectInfomation({ children }: any) {
    return (
        <>
            {/* //table */}
            <div className="relative w-[98.5%] min-h-[17%] bg-[#fff9f4] rounded-2xl border border-[#ffa75e] mt-6 overflow-hidden">
                <div className="mt-4 ml-7 flex w-full ">
                    <div className="gap-3 w-[20%] flex flex-col justify-center">
                        <div className="flex items-end w-full">
                            <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight min-w-[30%]">
                                Môn học
                            </div>
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro">Ngữ Văn</div>
                        </div>
                        <div className="flex items-end w-full">
                            <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight min-w-[30%]">
                                Lớp
                            </div>
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro">10C1</div>
                        </div>
                        <div className="flex items-end w-full">
                            <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight min-w-[30%]">
                                Mã lớp
                            </div>
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro">134 2665 3563</div>
                        </div>
                    </div>

                    <div className="w-[50%] flex items-start">
                        <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight min-w-[20%]">
                            Thời gian bắt đầu:
                        </div>
                        <div className="flex flex-col mt-1 gap-2">
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                Thứ 6, 20/10/2020
                            </div>
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                13:00 (GMT +7 Bangkok)
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2 ">
                        <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight">In bảng điểm:</div>
                        <div className="flex w-[65%] items-center gap-4 relative">
                            <div className="w-[45%] h-9 px-3 bg-[#ffd8b8] rounded border border-[#ff7506] justify-center items-center inline-flex overflow-hidden">
                                <div className="text-center cursor-pointer text-[#373839] text-base font-bold font-['Source Sans Pro'] tracking-tight">
                                    Xuất file
                                </div>
                            </div>
                            <div className="flex-1">{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubjectInfomation;
