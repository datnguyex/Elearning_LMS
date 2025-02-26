import './AddExam.css';
import PositionBackgroundIcons from 'src/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from 'src/components/PositionUserInfo/PositionUserInfo';
import InputForm from 'src/components/TeacherForm/InputForm';
import Sidebar from 'src/layouts/Sidebar/Sidebar';
import TitlePage from 'src/layouts/Tilte/Title';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import { useState } from 'react';
import { gradeArr } from 'src/assets/Arrays/GradeTable/GradeTable';
import DropdownSelector from 'src/components/ClassList/DropdownSelector';
import UseToggleArray from 'src/CustomHooks/UseToggleArray';
import { Checkbox } from 'antd';
import FormTwo from 'src/layouts/TeacherForm/FormTwo';
import GetTimeData from 'src/utils/GetTimeData';
import TextAreaForm from 'src/components/TeacherForm/TextAreaForm';
import { Upaperclip } from 'src/assets/Icons/Icons';
import AttachmentBar from 'src/components/Attachment/AttachmentBar';
import ActionButton from 'src/components/Button/ActionButton';

function AddExam() {
    //get times
    const { arrayHours, arrayMinute, times } = GetTimeData();

    //period array
    const arrPeriod = ['Giữa kì 1', 'Học kì 1', 'Giữa kì 2', 'Học kì 2'];

    //type form state
    const [typeForm, setTypeForm] = useState(1);

    //grade state
    const [grade, setGrade] = useState('10');

    //hour choosen state
    const [hourChoosen, setHourchosen] = useState(0);

    //minute choosen state
    const [minuteChoosen, setMinuteChoosen] = useState<string | number>('00');

    //minute start choosen state
    const [timeStartChoosen, setTimeStartChoosen] = useState<string>('00:00');

    //minute end choosen state
    const [timeEndChoosen, setTimeEndChoosen] = useState<string>('00:00');

    //type capacity state
    const [typeCapacity, setTypeCapaCity] = useState('');

    //set type capacity function
    const handleSetCapacity = (e: string) => {
        setTypeCapaCity(e);
    };

    //opem options state
    const [openOption, setOpenOption] = useState<number[]>([]);

    // period state
    const [period, setPeriod] = useState('Giữa kì 1');

    //type form function
    const onChangeTypeForm = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setTypeForm(e.target.value);
    };

    //set grade function
    const handleSetGrade = (e: string) => {
        setGrade(e);
    };
    //choosen minute function
    const handleChoosenMinute = (e: number) => {
        setMinuteChoosen(e);
    };
    //choosen hour function
    const handleChoosenHour = (e: number) => {
        setHourchosen(e);
    };
    const handleTimeStartChoosen = (e: string) => {
        setTimeStartChoosen(e);
    };

    //choosen time End function
    const handleTimeEndChoosen = (e: string) => {
        setTimeEndChoosen(e);
    };
    //choosen period function
    const handleSetPeriod = (e: string) => {
        setPeriod(e);
    };

    //push id options to openOption state function
    const handleDisplayDropdown = (id: number) => {
        UseToggleArray({ id: id, setState: setOpenOption });
    };

    return (
        <>
            <div className="flex justify-start max-w-[100vw] h-[140vh] max-h-[140vh] relative">
                <Sidebar />
                <div className="w-full ml-[6%] flex mt-[6vh]">
                    {/* //position backgroun icon */}
                    <PositionBackgroundIcons />
                    <PositionUserInfo />
                    <div className="flex flex-col h-full pl-[20px] w-full">
                        <TitlePage subTitle="Bài kiểm tra">Thêm bài kiểm tra</TitlePage>
                        <div className="w-[98.5%] min-h-[82%] bg-white shadow-statiticsResultStudy relative z-[10]  rounded-tr-lg  rounded-br-lg rounded-bl-lg mt-6">
                            {/* //form1 */}
                            <div className="w-full py-5">
                                <div className="w-[45%] ml-[17%] h-full flex flex-col gap-5">
                                    {/* //subject */}
                                    <div className="w-full flex justify-start items-center">
                                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                                            Chủ đề
                                        </div>
                                        <InputForm />
                                    </div>
                                    {/* //formal */}
                                    <div className="w-full flex justify-start items-center">
                                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                                            Hình thức
                                        </div>
                                        <div className="flex items-center radio-addExam gap-8">
                                            <Radio onChange={onChangeTypeForm} value={1} checked={typeForm === 1}>
                                                Trắc nghiệm
                                            </Radio>
                                            <Radio onChange={onChangeTypeForm} value={2} checked={typeForm === 2}>
                                                Tự luận
                                            </Radio>
                                        </div>
                                    </div>
                                    {/* //grade */}
                                    <div className="w-full flex justify-start items-center ">
                                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                                            Khối
                                        </div>
                                        <div className="flex items-center radio-addExam w-[50%] gap-8">
                                            <div className="w-[30%]">
                                                <DropdownSelector
                                                    borderColor="#C9C4C0"
                                                    color="#c8c4c0"
                                                    onSelectOption={handleSetGrade}
                                                    onToggleOption={handleDisplayDropdown}
                                                    options={gradeArr}
                                                    openOption={openOption}
                                                    id={1}
                                                    value={grade}
                                                />
                                            </div>
                                            <Checkbox className="flex-1 checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-end">
                                                Chọn tất cả các lớp
                                            </Checkbox>
                                        </div>
                                    </div>
                                    <div className="ml-[20%] flex items-center gap-4">
                                        <div className="w-16 h-7 cursor-pointer pt-[3px] pb-1 bg-[#2dacee] rounded-2xl justify-center items-center inline-flex overflow-hidden">
                                            <div className="text-white text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                10A1
                                            </div>
                                        </div>
                                        <div className="w-16 h-7 cursor-pointer pt-[3px] pb-1 bg-[#c8c4c0] rounded-2xl justify-center items-center inline-flex overflow-hidden">
                                            <div className="text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                10A2
                                            </div>
                                        </div>
                                        <div className="w-16 h-7 cursor-pointer pt-[3px] pb-1 bg-[#c8c4c0] rounded-2xl justify-center items-center inline-flex overflow-hidden">
                                            <div className="text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                10A3
                                            </div>
                                        </div>
                                        <div className="w-16 h-7 cursor-pointer pt-[3px] pb-1 bg-[#c8c4c0] rounded-2xl justify-center items-center inline-flex overflow-hidden">
                                            <div className="text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                10A4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* form2 */}
                            <FormTwo type={'AddExam'}>
                                <DropdownSelector
                                    borderColor="#C9C4C0"
                                    onSelectOption={handleChoosenHour}
                                    onToggleOption={handleDisplayDropdown}
                                    options={arrayHours}
                                    openOption={openOption}
                                    id={2}
                                    value={hourChoosen}
                                />
                                <DropdownSelector
                                    borderColor="#C9C4C0"
                                    onSelectOption={handleChoosenMinute}
                                    onToggleOption={handleDisplayDropdown}
                                    options={arrayMinute}
                                    openOption={openOption}
                                    id={3}
                                    value={minuteChoosen}
                                />
                                <DropdownSelector
                                    borderColor="#C9C4C0"
                                    onSelectOption={handleTimeStartChoosen}
                                    onToggleOption={handleDisplayDropdown}
                                    options={times}
                                    openOption={openOption}
                                    id={4}
                                    value={timeStartChoosen}
                                />
                                <DropdownSelector
                                    borderColor="#C9C4C0"
                                    color="#c8c4c0"
                                    onSelectOption={handleTimeEndChoosen}
                                    onToggleOption={handleDisplayDropdown}
                                    options={times}
                                    openOption={openOption}
                                    id={5}
                                    value={timeEndChoosen}
                                />
                                <DropdownSelector
                                    borderColor="#C9C4C0"
                                    color="#c8c4c0"
                                    onSelectOption={handleSetPeriod}
                                    onToggleOption={handleDisplayDropdown}
                                    options={arrPeriod}
                                    openOption={openOption}
                                    id={6}
                                    value={period}
                                />
                            </FormTwo>
                            {/* form3 */}
                            <div className="w-full py-5">
                                <div className="w-[45%] ml-[17%] h-full flex flex-col gap-5">
                                    {/* //text area */}
                                    <div className="w-full flex justify-start items-center">
                                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                                            Mô tả
                                        </div>
                                        <TextAreaForm />
                                    </div>
                                    {/* //attachment */}
                                    <div className="flex items-center w-full ml-[20%]">
                                        <div className="text-[#373839] text-base font-normal font-sourceSansPro italic">
                                            Tệp đính kèm
                                        </div>
                                        <div className="w-[40%] inline-block mb-2">
                                            <AttachmentBar />
                                        </div>
                                    </div>
                                    {/* //others setting */}
                                    <div className="w-full flex justify-start items-center">
                                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                                            Quy định khác
                                        </div>
                                        <Checkbox className="flex-1 checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-end">
                                            Yêu cầu học viên đính kèm tệp
                                        </Checkbox>
                                    </div>
                                    {/* //others setting */}
                                    <div className="w-full flex justify-start items-start mt-2">
                                        <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                                            Quy định nộp bài
                                        </div>
                                        <div className="w-full flex flex-1 justify-between">
                                            <div className="flex flex-col">
                                                <div className="text-[#373839] text-base font-normal font-sourceSansPro italic">
                                                    Định dạng
                                                </div>
                                                <Checkbox
                                                    onChange={() => handleSetCapacity('Doc,Docx')}
                                                    className="flex-1 checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-center"
                                                >
                                                    Doc,Docx
                                                </Checkbox>
                                                <Checkbox
                                                    onChange={() => handleSetCapacity('PowerPoint')}
                                                    className="flex-1 checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-center"
                                                >
                                                    PowerPoint
                                                </Checkbox>
                                                <Checkbox
                                                    onChange={() => handleSetCapacity('XxLs')}
                                                    className="flex-1 checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-center"
                                                >
                                                    XxLs
                                                </Checkbox>
                                                <Checkbox
                                                    onChange={() => handleSetCapacity('Jpeg')}
                                                    className="flex-1 checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-center"
                                                >
                                                    Jpeg
                                                </Checkbox>
                                            </div>
                                            <div className="flex gap-8">
                                                <div className="flex flex-col items-center gap-3">
                                                    <div className="text-[#373839] text-base font-normal font-sourceSansPro mb-1">
                                                        10MB
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center  gap-3">
                                                    <div className="text-[#373839] text-base font-normal font-sourceSansPro mb-1">
                                                        20MB
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center  gap-3">
                                                    <div className="text-[#373839] text-base font-normal font-sourceSansPro mb-1">
                                                        30MB
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center gap-3">
                                                    <div className="text-[#373839] text-base font-normal font-sourceSansPro mb-1">
                                                        40MB
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                    <div className="radio-typeFile-addExam">
                                                        <Radio
                                                            onChange={onChangeTypeForm}
                                                            value={1}
                                                            checked={typeForm === 4}
                                                        ></Radio>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-[#ff5400] text-base font-normal font-['Source Sans Pro'] w-full flex justify-end">
                                        *Lưu ý: Tổng dung lượng tối đa là 50MB
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* //btns */}
                <div className="flex items-center absolute bottom-[30px] left-[50%] translate-x-[-50%] rounded w-[17%] gap-5">
                    <ActionButton content="Hủy" bgColor="#F2F2F2" textColor="#373839" />
                    <ActionButton content="Lưu" bgColor="#FF7506" textColor="white" />
                </div>
            </div>
        </>
    );
}

export default AddExam;
