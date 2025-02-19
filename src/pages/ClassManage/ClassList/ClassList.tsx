import { useEffect, useState } from 'react';
import { ArrowWhite, DoubleArrow, ICircle, Search } from '~/assets/Icons/Icons';
import PositionBackgroundIcons from '~/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from '~/components/PositionUserInfo/PositionUserInfo';
import Sidebar from '~/layouts/Sidebar/Sidebar';
import { Pagination } from 'antd';
import './ClassList.css';
import UseToggleArray from '~/CustomHooks/UseToggleArray';
import { motion } from 'framer-motion';
import UsePreventTextAndMaxValue from '~/CustomHooks/UsePreventTextAndMaxValue';
import ButtonTypeClass from '~/components/ClassList/ButtonTypeClass';
import { ref, get, set } from 'firebase/database';
import { Databasez } from '~/firebase';
import Classes from '~/components/ClassList/Classes';
import DropdownSelector from '~/components/ClassList/DropdownSelector';
import GetSubjectGroupData from '~/services/Classlist/getSubjectGroupData';
import SetSubjectData from '~/services/Classlist/SetSubjectData';
import SetGroupSubjectData from '~/services/Classlist/SetGroupSubjectData';
import TitlePage from '~/layouts/Tilte/Title';
function ClassList() {
    //quantity elements on table state
    const [ElementQuantity, setElementQuantity] = useState(6);

    //current page state
    const [currentPage, setCurrentPage] = useState(1);

    //display Element Quantity state
    const [displayElementQuantity, setDisplayElementQuantity] = useState(6);
    //open option state
    const [openOption, setOpenOption] = useState<number[]>([]);

    //type class state
    const [typeClass, setTypeClass] = useState(1);

    // group subject state
    const [groupSubject, setGroupSubject] = useState('THCS - Tổ văn sử địa');

    //arr group subject
    const [arrGroupSubject, setArrGroupSubject] = useState<string[]>([]);

    //subject state
    const [subject, setSubject] = useState('Văn học');

    //arr subjects state
    const [arrSubject, setArrSubject] = useState<any[]>([]);

    const [classes, setClasses] = useState<any[]>([]);
    //swtich class from object to array
    const classesArray = Array.isArray(classes) ? classes : Object.values(classes);

    //elements per pay
    const currentClasses = classesArray.slice((currentPage - 1) * ElementQuantity, currentPage * ElementQuantity);

    //set perpage function
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    console.log('currentPage', currentPage);
    //opent options handle
    const handleOpenOpention = (e: number) => {
        UseToggleArray({ id: e, setState: setOpenOption });
    };

    //set quanity elements on table function
    const handleElementQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        UsePreventTextAndMaxValue({
            maxValue: 6,
            setState: setElementQuantity,
            event: e,
            setStateFake: setDisplayElementQuantity,
        });
    };
    //set type btn class funtion
    const handleTypeClass = (e: number) => {
        setTypeClass(e);
    };
    //get subject groupd from firebase
    GetSubjectGroupData({
        setClasses: setClasses,
        setArrGroupSubject: setArrGroupSubject,
        setGroupSubject: setGroupSubject,
        setSubject: setSubject,
        setArrSubject: setArrSubject,
    });

    //set subject function
    const handleSetSubject = async (e: string) => {
        SetSubjectData({ e: e, setSubject: setSubject, setClasses: setClasses });
    };

    //set subject group function
    const handleSetGroupSubject = async (e: string) => {
        SetGroupSubjectData({
            e: e,
            setGroupSubject: setGroupSubject,
            setArrSubject: setArrSubject,
            setSubject: setSubject,
            setClasses: setClasses,
        });
    };

    //reset current page
    useEffect(() => {
        setCurrentPage(1);
    }, [ElementQuantity, subject, groupSubject]);

    return (
        <>
            {/* h-1080 w-1920 */}
            <div className="flex justify-start w-[100vw] h-[100vh]  max-h-[100vh] relative overflow-hidden">
                <Sidebar />
                <div className="w-full ml-[6%] flex mt-[6vh]">
                    {/* //position backgroun icon */}
                    <PositionBackgroundIcons />
                    {/* //user info */}
                    <PositionUserInfo />
                    <div className="flex flex-col h-full pl-[20px] w-full   ">
                        {/* //title */}
                        <TitlePage> Quản lý lớp học</TitlePage>
                        <div className="flex items-center gap-3 w-full h-[8%]  mt-6 ml-[0px]">
                            <ButtonTypeClass
                                value={1}
                                currentTypeClass={typeClass}
                                handleTypeClass={handleTypeClass}
                                label="Lớp học sắp tới"
                            />
                            <ButtonTypeClass
                                value={2}
                                currentTypeClass={typeClass}
                                handleTypeClass={handleTypeClass}
                                label="Lớp học đã qua"
                            />
                        </div>
                        <div className="w-[98.5%] h-[78%] bg-white shadow-statiticsResultStudy relative z-[10]  rounded-tr-lg  rounded-br-lg rounded-bl-lg">
                            <div className="pt-7 px-7 w-full h-full">
                                <div className="w-full flex items-end justify-between">
                                    {/* //dropdown */}
                                    <div className="w-[28%] flex gap-10 items-center">
                                        <DropdownSelector
                                            title="Chọn Tổ"
                                            value={groupSubject}
                                            options={arrGroupSubject}
                                            openOption={openOption}
                                            onToggleOption={handleOpenOpention}
                                            onSelectOption={handleSetGroupSubject}
                                            id={1}
                                        />
                                        <DropdownSelector
                                            title="Chọn môn học"
                                            value={subject}
                                            options={arrSubject}
                                            openOption={openOption}
                                            onToggleOption={handleOpenOpention}
                                            onSelectOption={handleSetSubject}
                                            id={2}
                                        />
                                    </div>
                                    <div className="w-[25%] h-10 bg-[#efefef] rounded-2xl relative overflow-hidden flex pr-3">
                                        <div className=" w-[12%] h-full left-0 top-0 bg-transparent flex items-center justify-center">
                                            <Search />
                                        </div>
                                        <input
                                            placeholder=" Tìm kiếm theo tên topic"
                                            className=" h-full left-[12%] outline-none  opacity-50 text-[#373839] text-lg w-[100%] max-w-[100%] bg-transparent pr-[5px] font-normal font-sourceSansPro flex items-center italic"
                                        ></input>
                                    </div>
                                </div>
                                {/* 16.6 */}
                                <Classes
                                    classes={currentClasses}
                                    subject={subject}
                                    typeClass={typeClass}
                                    ElementQuantity={ElementQuantity}
                                />
                                {/* //quantiy items */}
                                <div className="flex gap-2 items-center absolute bottom-3">
                                    <div className="text-[#373839] italic text-base font-normal font-['Source Sans Pro']">
                                        Hiển thị{' '}
                                    </div>
                                    <div className="w-12 h-8 pl-2 pr-8 pt-[5px] pb-1.5 rounded border border-[#ff7506] justify-start items-center inline-flex overflow-hidden">
                                        <input
                                            onChange={(e) => handleElementQuantity(e)}
                                            value={displayElementQuantity}
                                            className="text-[#373839] outline-none bg-transparent text-base font-normal font-['Source Sans Pro'] leading-tight"
                                        />
                                    </div>
                                    <div className="text-[#373839] italic text-base font-normal font-['Source Sans Pro']">
                                        hàng trong mỗi trang
                                    </div>
                                </div>
                                {/* //pagination items */}
                                <div className="classlist-pagination absolute right-8 bottom-3">
                                    <Pagination
                                        onChange={handlePageChange}
                                        current={currentPage}
                                        total={Object.keys(classes).length}
                                        pageSize={ElementQuantity}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassList;
