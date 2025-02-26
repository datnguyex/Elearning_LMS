import { createContext, useRef, useState } from 'react';
import { CalendarOrange } from 'src/assets/Icons/Icons';
import DropdownSelector from 'src/components/ClassList/DropdownSelector';
import PositionBackgroundIcons from 'src/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from 'src/components/PositionUserInfo/PositionUserInfo';
import UseToggleArray from 'src/CustomHooks/UseToggleArray';
import Sidebar from 'src/layouts/Sidebar/Sidebar';
import './AddClassSchedule.css';
import { DatePicker } from 'antd';
import GetTimeData from 'src/utils/GetTimeData';
import FetchAssistantInfo from 'src/services/AssistantService/FetchAssistantInfo';
import { CopyLink } from 'src/utils/CopyLink';
import ActionButton from 'src/components/Button/ActionButton';
import FormThree from 'src/layouts/TeacherForm/FormThree';
import FormOne from 'src/layouts/TeacherForm/FormOne';
import AddClassContestType from 'src/types/ClassList/AddClassContest';
import TitlePage from 'src/layouts/Tilte/Title';
import FormTwo from 'src/layouts/TeacherForm/FormTwo';

//contest AddClass
export const AddClassContest = createContext<AddClassContestType>({
    passwordValue: '',
    setPasswordValue: () => {},
    hiddenPassword: false,
    togglePasswordVisibility: () => {},
    linkValue: '',
    handleSetLinkValue: () => {},
    handleCopy: () => {},
    inputRef: null,
});

function AddClassSchedule() {
    //link value ref
    const inputRef = useRef<HTMLInputElement | null>(null);

    //get times
    const { arrayHours, arrayMinute, times } = GetTimeData();
    //assitant info
    const [assistantInfo, setAssistantInfo] = useState<string[]>([]);

    //opem options state
    const [openOption, setOpenOption] = useState<number[]>([]);

    //assistant choosen state
    const [assistant, setAssistant] = useState('');

    //hour choosen state
    const [hourChoosen, setHourchosen] = useState(0);

    //minute choosen state
    const [minuteChoosen, setMinuteChoosen] = useState<string | number>('00');

    //minute start choosen state
    const [timeStartChoosen, setTimeStartChoosen] = useState<string>('00:00');

    //hidden password state
    const [hiddenPassword, setHiddenPassword] = useState(true);

    //password value
    const [passwordValue, setPasswordValue] = useState('');

    const [linkValue, setLinkValue] = useState<string>();

    //minute end choosen state
    const [timeEndChoosen, setTimeEndChoosen] = useState<string>('00:00');

    //push id options to openOption state function
    const handleDisplayDropdown = (id: number) => {
        UseToggleArray({ id: id, setState: setOpenOption });
    };

    //choosen assistant function
    const handleSetAssistant = (e: string) => {
        setAssistant(e);
    };
    console.log('linkValue', linkValue);

    //choosen hour function
    const handleChoosenHour = (e: number) => {
        setHourchosen(e);
    };
    //choosen minute function
    const handleChoosenMinute = (e: number) => {
        setMinuteChoosen(e);
    };
    //choosen time start function
    const handleTimeStartChoosen = (e: string) => {
        setTimeStartChoosen(e);
    };
    //choosen time End function
    const handleTimeEndChoosen = (e: string) => {
        setTimeEndChoosen(e);
    };

    //get info assistant

    FetchAssistantInfo({ setState: setAssistantInfo });

    //hidden password function
    const togglePasswordVisibility = () => {
        setHiddenPassword((prevState) => !prevState);
    };

    //set password function
    // const handlePasswordChange = (e: any) => {
    //     setPasswordValue(e.target.value);
    // };
    const handleSetLinkValue = (e: any) => {
        setLinkValue(e);
    };
    //copy link function
    const handleCopy = () => {
        CopyLink({ ref: inputRef });
    };

    return (
        <>
            <div className="flex justify-start w-[100vw] h-[100vh]  max-h-[100vh] relative overflow-hidden">
                <Sidebar />

                <div className="w-full ml-[6%] flex mt-[6vh]">
                    {/* //position backgroun icon */}
                    <PositionBackgroundIcons />
                    {/* //user info */}
                    <PositionUserInfo />
                    <div className="flex flex-col h-full pl-[20px] w-full">
                        {/* //title */}
                        <div className="flex items-center gap-5">
                            <TitlePage subTitle="Quản lý lớp học">Thêm buổi học mới</TitlePage>
                        </div>
                        {/* //value table */}
                        <div className="w-[98.5%] min-h-[78%] bg-white shadow-statiticsResultStudy relative z-[10]  rounded-tr-lg  rounded-br-lg rounded-bl-lg mt-6">
                            {/* group1 */}
                            <div className="w-full py-5">
                                <FormOne>
                                    <DropdownSelector
                                        borderColor="#C9C4C0"
                                        color="#c8c4c0"
                                        onSelectOption={handleSetAssistant}
                                        onToggleOption={handleDisplayDropdown}
                                        options={assistantInfo}
                                        openOption={openOption}
                                        id={1}
                                        value={assistant}
                                    />
                                </FormOne>
                            </div>
                            {/* group2 */}
                            <FormTwo>
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
                                    id={5}
                                    value={timeStartChoosen}
                                />
                                <DropdownSelector
                                    borderColor="#C9C4C0"
                                    color="#c8c4c0"
                                    onSelectOption={handleTimeEndChoosen}
                                    onToggleOption={handleDisplayDropdown}
                                    options={times}
                                    openOption={openOption}
                                    id={7}
                                    value={timeEndChoosen}
                                />
                            </FormTwo>
                            {/* group3 */}
                            <div className="w-full py-5 ">
                                <div className="w-[45%] ml-[17%] h-full flex flex-col gap-5">
                                    <AddClassContest.Provider
                                        value={{
                                            passwordValue,
                                            setPasswordValue,
                                            hiddenPassword,
                                            togglePasswordVisibility,
                                            linkValue,
                                            handleSetLinkValue,
                                            handleCopy,
                                            inputRef,
                                        }}
                                    >
                                        <FormThree />
                                    </AddClassContest.Provider>
                                </div>
                            </div>
                        </div>
                        {/* //btns */}
                        <div className="flex items-center absolute bottom-[10px] left-[50%] translate-x-[-50%] rounded w-[17%] gap-5">
                            <ActionButton content="Hủy" bgColor="#F2F2F2" textColor="#373839" />
                            <ActionButton content="Lưu" bgColor="#FF7506" textColor="white" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddClassSchedule;
