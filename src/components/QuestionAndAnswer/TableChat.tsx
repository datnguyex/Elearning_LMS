import { TeacherImg } from '~/assets/images';

interface TableChatProps {
    responseType: boolean;
    handleSetResponseType: (value: boolean) => void;
}
function TableChat({ responseType, handleSetResponseType }: TableChatProps) {
    return (
        <>
            <div
                className={`${responseType == true ? 'max-h-[64vh]' : 'max-h-[92vh]'} flex  flex-col overflow-y-auto `}
            >
                <div className="w-[90%] mx-auto flex items-center relative mt-5">
                    <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                    <div className="flex ml-5">
                        <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                            Hiền Mai
                            <div className="flex gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    20 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>

                    {responseType == false ? (
                        <button
                            onClick={() => handleSetResponseType(true)}
                            className="rounded border-[#FF7506] border bg-[#FFD8B8] text-[#373839] absolute top-[50%] translate-y-[-50%] right-5 px-4 py-1"
                        >
                            <div className="text-lg font-bold font-Mulish tracking-tight">Trả lời</div>
                        </button>
                    ) : (
                        <div
                            onClick={() => handleSetResponseType(false)}
                            className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-5 text-[#ff7506] text-lg font-extrabold font-Mulish tracking-tight"
                        >
                            Hủy
                        </div>
                    )}
                </div>
                <div className="w-[78%] mx-auto text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                    3+2=5 vậy thì đưa bàn tay cho anh nắm... Vestibulum viverra, eros et volutpat interdum, leo lectus
                    commodo tellus, vitae bibendum est massa in felis. Integer vitae lectus in ipsum efficitur bibendum.
                    Proin sed nisi odio. Maecenas sit amet rutrum diam. Pellentesque lorem sem, mollis vitae velit in,
                    aliquam vehicula dui. Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat
                    eget tortor consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat
                    nisl. Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>{' '}
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>{' '}
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>{' '}
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>{' '}
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>{' '}
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
                {/* //chat teacher */}
                <div className="w-[78%] min-h-[60px] mx-auto mt-[24px] flex flex-col border-l border-l-[#c8c4c0] pl-3">
                    <div className="flex items-center">
                        <img src={TeacherImg} className="w-[35px] h-[35px] rounded-[50%]"></img>
                        <div className="flex flex-col mx-4">
                            <div className="flex items-center gap-3">
                                <div className="text-[#cc5c00] text-lg font-bold font-Mulish tracking-tight">
                                    Trần Thanh Tâm
                                </div>
                                <div className="w-3 h-0.5 bg-[#c4c4c4]" />
                                <div className="text-[#c8c4c0] text-lg font-bold font-Mulish tracking-tight">
                                    Giáo viên
                                </div>
                            </div>
                            <div className="flex items-center gap-10">
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    22 tháng 10, 2020
                                </div>
                                <div className="opacity-50 text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                                    10:14
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[45px] text-[#373839] text-base font-normal font-sourceSansPro leading-tight">
                        Etiam nec mi bibendum, vestibulum magna vel, iaculis nibh. Vestibulum in erat eget tortor
                        consectetur fermentum a nec ligula. Ut ut eros eu sapien varius tempus. Fusce id erat nisl.
                        Phasellus efficitur tincidunt cursus. Maecenas vitae est arcu.
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableChat;
