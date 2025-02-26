import { ArrowWhite, CheckCircle, DoubleArrow, XcircleBackground } from 'src/assets/Icons/Icons';

interface StudentScoreTableProps {
    dataTable: {
        id: number;
        name: string;
        date: string;
        scores: number[];
        finalScore: number;
        dateTime: string;
        time: string;
    }[];
}

function StudentScoreTable({ dataTable }: StudentScoreTableProps) {
    return (
        <>
            <div className="w-[98.5%] max-h-[44%] z-10 relative rounded overflow-y-auto shadow-statiticsResultStudy">
                <div className="rounded w-full h-20 flex items-center bg-gradient-to-l from-[#ff5400] to-[#f17f21]">
                    <div className="flex-1 h-full flex items-center justify-center">
                        <div className="text-white text-lg font-bold font-Mulish tracking-tight">STT</div>
                    </div>
                    <div className="flex-1 h-full flex items-center justify-center">
                        <div className="text-white text-lg font-extrabold font-Mulish tracking-tight flex items-center justify-center cursor-pointer">
                            Họ và tên
                            <DoubleArrow />
                        </div>
                    </div>
                    <div className="flex-1 h-full flex items-center justify-center">
                        <div className="text-white text-lg font-extrabold font-Mulish tracking-tight">Ngày sinh</div>
                    </div>
                    <div className="w-[45%] h-full flex justify-center items-center ">
                        <div className="flex flex-col w-full h-full border-l border-r border-[#c8c4c0]">
                            <div className="text-white border-b border-[#c8c4c0] h-[50%] text-lg font-extrabold font-Mulish leading-none flex items-center justify-center tracking-tight">
                                <div className="rotate-[90deg]">
                                    <ArrowWhite width={'17px'} height={'17px'} />
                                </div>
                                HỌC KỲ I
                                <div className="rotate-[-90deg]">
                                    <ArrowWhite width={'17px'} height={'17px'} />
                                </div>
                            </div>

                            <div className="flex items-center w-full h-[50%]">
                                <div className="flex-1 flex justify-center items-center text-white text-lg font-extrabold font-Mulish tracking-tight">
                                    Chuyên cần
                                </div>
                                <div className="flex-1 flex justify-center items-center text-white text-lg font-extrabold font-Mulish tracking-tight">
                                    Miệng
                                </div>
                                <div className="flex-1 flex justify-center items-center text-white text-lg font-extrabold font-Mulish tracking-tight">
                                    15 phút
                                </div>
                                <div className="flex-1 flex justify-center items-center text-white text-lg font-extrabold font-Mulish tracking-tight">
                                    Hệ số 1
                                </div>
                                <div className="flex-1 flex justify-center items-center text-white text-lg font-extrabold font-Mulish tracking-tight">
                                    Hệ số 2
                                </div>
                                <div className="flex-1 flex justify-center items-center text-white text-lg font-extrabold font-Mulish tracking-tight">
                                    Trung bình
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 h-full flex items-center justify-center">
                        <div className="text-white  text-lg font-extrabold font-Mulish tracking-tight">
                            Điểm trung <br />
                            bình cả năm
                        </div>
                    </div>
                    <div className="flex-1 h-full flex items-center justify-center">
                        <div className="text-white text-lg font-extrabold font-Mulish tracking-tight">Đạt</div>
                    </div>
                    <div className="flex-1 h-full flex items-center justify-center">
                        <div className="text-white text-lg font-extrabold font-Mulish tracking-tight">
                            Ngày cập nhật
                        </div>
                    </div>
                </div>
                {/* //item */}

                {dataTable.map((item, index) => (
                    <div
                        key={item.id}
                        className={`w-full h-20 flex items-center bg-[#fff] border-l border-r border-b ${index === 9 ? 'rounded-b-lg' : ''}`}
                    >
                        <div className="flex-1 h-full flex items-center justify-center">
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">
                                {item.id}
                            </div>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center">
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">
                                {item.name}
                            </div>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center">
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro tracking-tight">
                                {item.date}
                            </div>
                        </div>
                        <div className="w-[45%] h-full flex justify-center items-center">
                            <div className="flex flex-col w-full h-full">
                                <div className="flex items-center w-full h-full border-l border-r">
                                    {item.scores.map((score, idx) => (
                                        <div
                                            key={idx}
                                            className="flex-1 flex justify-center items-center text-[#373839] text-base font-normal font-sourceSansPro tracking-tight"
                                        >
                                            {score}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center">
                            <div
                                className={`text-lg font-bold font-Mulish tracking-tight ${item.finalScore < 5 ? 'text-[#ed2025]' : 'text-[#49c40f]'}`}
                            >
                                {item.finalScore}
                            </div>
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center">
                            {item.finalScore < 5 ? (
                                <XcircleBackground width={'18px'} height={'18px'} />
                            ) : (
                                <CheckCircle width={'18px'} height={'18px'} />
                            )}
                        </div>
                        <div className="flex-1 h-full flex items-center justify-center">
                            <div className="text-[#373839] text-base font-normal font-sourceSansPro">
                                {item.dateTime}
                                <br />
                                {item.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StudentScoreTable;
