import { useEffect, useRef, useState } from 'react';

import { ArrowWhite, CalendarOrange, EditPenOrange, PlusCircle, XCircle } from 'src/assets/Icons/Icons';
import FormThree from 'src/layouts/TeacherForm/FormThree';
import './ClassInfomation.css';
import DropdownSelector from 'src/components/ClassList/DropdownSelector';
import UseToggleArray from 'src/CustomHooks/UseToggleArray';
import GetTimeData from 'src/utils/GetTimeData';
import Slider from 'react-slick';
import { onNextClick, onPrevClick } from 'src/components/ButtonSlider/ActionClick';
import { CustomArrowNextMenu, CustomArrowPrevMenu } from 'src/components/ButtonSlider/CustomClick';
import { FetchLessionInfo } from 'src/services/LessonService/FetchLessonInfo';
import Lesson from 'src/types/ClassInmation/Lesson';

import TeacherInfomation from 'src/components/ClassInfomation/TeacherInfomation';
import { LessonInfomation, LessonSubInfomation } from 'src/components/ClassInfomation/LessonInfomation';
import { Link } from 'react-router-dom';

function ClassInfomation() {
    //slider ref
    const sliderRef = useRef<any>(null);

    //get times
    const { arrayHours, arrayMinute, times } = GetTimeData();

    //current lesson
    const [currentLesson, setCurrentLesson] = useState<Lesson>({
        id: 2,
        date: '',
        timeStart: '',
        timeEnd: '',
        key: false,
    });
    //type page state
    const [typePage, setTypePage] = useState(1);

    //exam date state
    const [examdDate, setExamDate] = useState('00:00');

    //open options state
    const [openOption, setOpenOption] = useState<number[]>([]);

    //lesson state
    const [lessons, setLessons] = useState<Lesson[]>([]);

    //set exam date hand
    const handleSetDateExam = (e: string) => {
        setExamDate(e);
    };

    //push id options to openOption state function
    const handleDisplayDropdown = (id: number) => {
        UseToggleArray({ id: id, setState: setOpenOption });
    };

    //set type page function
    const HandsetTypePage = (e: number) => {
        setTypePage(e);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,

        prevArrow: (
            <CustomArrowPrevMenu
                stylez={{
                    position: 'absolute',
                    cursor: 'pointer',
                    zIndex: 10,
                    left: '-50px',
                    top: '50%',
                    transform: 'translateX(-100%)',
                    rotate: '90deg',
                }}
                icon={<ArrowWhite color={'#ff7506'} />}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                sliderRef={sliderRef}
            />
        ),
        nextArrow: (
            <CustomArrowNextMenu
                stylez={{
                    position: 'absolute',
                    cursor: 'pointer',
                    zIndex: 10,
                    right: '-50px',
                    top: '50%',
                    transform: 'translateX(100%)',
                    rotate: '-90deg',
                }}
                icon={<ArrowWhite color={'#ff7506'} />}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                sliderRef={sliderRef}
            />
        ),
    };

    useEffect(() => {
        FetchLessionInfo({ setState: setLessons });
    }, []);

    return (
        <>
            {/* h-a1080 w-1920 */}
            <div className="w-[92.5%] h-[80%] max-w-[92.5%]  bg-white shadow-statiticsResultStudy relative rounded-tr-lg  rounded-br-lg rounded-bl-lg mt-6 ">
                {/* //group1 */}
                <div className="w-full h-[20%] flex">
                    <TeacherInfomation />
                </div>
                {/* group2 */}
                <div className="w-full flex flex-col bg-[#f0f3f6] py-4 gap-3">
                    <LessonInfomation />
                    <div className="max-w-[63%] ml-[24%] flex gap-7 slider-joinClassSchedule max-h-[145px]">
                        <Slider ref={sliderRef} {...settings}>
                            {lessons.map((lesson: Lesson, index: number) => (
                                <div
                                    key={index}
                                    className={`w-[85px] max-w-[114px] h-[105px] ${currentLesson.id == index + 1 ? 'bg-[#FF7506]' : lesson.key === false ? 'bg-[#2EACEE]' : 'bg-[#C9C4C0]'} flex flex-col items-center rounded-2xl`}
                                    onClick={() =>
                                        setCurrentLesson({
                                            id: index + 1, // Gán ID là index + 1
                                            date: lesson.date,
                                            timeStart: lesson.timeStart,
                                            timeEnd: lesson.timeEnd,
                                            key: lesson.key,
                                        })
                                    }
                                >
                                    <div className="w-full h-[90%]">
                                        <div
                                            className={`mx-auto w-[80%] h-10 pb-[3px] bg-white rounded-[14px] mt-7 ${currentLesson.id == index + 1 ? 'text-[#FF7506]' : lesson.key === false ? 'text-[#2EACEE]' : 'text-[#C9C4C0]'} text-base font-bold font-sourceSansPro tracking-tight flex items-center justify-center`}
                                        >
                                            Buổi {index + 1}
                                        </div>
                                        <div className="mt-[5px] flex justify-center w-full text-white text-base font-bold font-sourceSansPro tracking-tight">
                                            {lesson.date}
                                        </div>
                                        <div className="mt-[5px] flex justify-center w-full text-white text-lg font-extrabold font-['Mulish'] tracking-tight">
                                            {lesson.timeStart} - {lesson.timeEnd}
                                        </div>
                                    </div>
                                    {currentLesson.id == index + 1 || lesson.key === true ? (
                                        <></>
                                    ) : (
                                        <div className="flex w-full h-[20%] items-end justify-center gap-3">
                                            <EditPenOrange />
                                            <XCircle />
                                        </div>
                                    )}
                                </div>
                            ))}

                            <Link
                                to={'/add-class-schedule'}
                                className="cursor-pointer w-[85px] max-w-[114px] h-[105px] bg-[#2EACEE] flex flex-col items-center rounded-2xl"
                            >
                                <div className="gap-2 w-full aspect-[1] relative bg-[#2dacee] rounded-2xl overflow-hidden flex flex-col items-center justify-center h-full">
                                    <PlusCircle />
                                </div>
                            </Link>
                        </Slider>
                    </div>

                    <LessonSubInfomation>
                        <DropdownSelector
                            borderColor="#C9C4C0"
                            onSelectOption={handleSetDateExam}
                            onToggleOption={handleDisplayDropdown}
                            options={times}
                            openOption={openOption}
                            id={6}
                            value={examdDate}
                        />
                    </LessonSubInfomation>
                </div>
                {/* group3 */}
                <div className="w-[65%] pl-[24%] flex flex-col py-4 gap-3">
                    <FormThree />
                </div>
            </div>
            <button className="w-[12%] px-3 h-[30px] bg-[#ff7506] cursor-pointer text-[#ffff] rounded justify-center items-center absolute bottom-[1%] left-[50%] translate-x-[-50%]">
                Bắt đầu lớp học
            </button>
        </>
    );
}

export default ClassInfomation;
