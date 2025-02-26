import { DatePicker, Pagination } from 'antd';
import { useState } from 'react';
import { CalendarOrange, DoubleArrow, ICircle, Search } from 'src/assets/Icons/Icons';
import ButtonTypeHeader from 'src/components/Button/ButtonTypeHeader';
import DropdownSelector from 'src/components/ClassList/DropdownSelector';
import './ExamList.css';
import PositionBackgroundIcons from 'src/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from 'src/components/PositionUserInfo/PositionUserInfo';
import UseToggleArray from 'src/CustomHooks/UseToggleArray';
import Sidebar from 'src/layouts/Sidebar/Sidebar';
import TitlePage from 'src/layouts/Tilte/Title';
import GetSubjectGroupData from 'src/services/Classlist/getSubjectGroupData';
import SetGroupSubjectData from 'src/services/Classlist/SetGroupSubjectData';
import Classes from 'src/components/ClassList/Classes';
import { arrValueExam, headersTable } from 'src/assets/Arrays/ExamList/ExamList';
import SetSubjectData from 'src/services/Classlist/SetSubjectData';
import UsePreventTextAndMaxValue from 'src/CustomHooks/UsePreventTextAndMaxValue';
import ActionButton from 'src/components/Button/ActionButton';

function ExamList() {
    //arrGrade
    const arrGrade = ['10', '11', '12'];

    // grade state
    const [grade, setGrade] = useState('10');

    //array grade state
    const [arrayGrade, setArrayGrade] = useState<string[]>([]);

    //type class test
    const [typeTest, setTypeTest] = useState<number>(1);

    //  subject state
    const [subject, setSubject] = useState('Toán hình học');

    //arr  subject
    const [arrSubject, setArrSubject] = useState<string[]>([]);

    //open option state
    const [openOption, setOpenOption] = useState<number[]>([]);

    //display Element Quantity state
    const [displayElementQuantity, setDisplayElementQuantity] = useState(6);

    //quantity elements on table state
    const [ElementQuantity, setElementQuantity] = useState(6);

    //current page state
    const [currentPage, setCurrentPage] = useState(1);

    //elements per pay
    const currentClasses = arrValueExam.slice((currentPage - 1) * ElementQuantity, currentPage * ElementQuantity);
    //set type test function
    const handleTypeTest = (e: number) => {
        setTypeTest(e);
    };

    //opent options handle
    const handleOpenOpention = (e: number) => {
        UseToggleArray({ id: e, setState: setOpenOption });
    };
    //get subject from firebase
    GetSubjectGroupData({
        setSubject: setSubject,
    });

    //handle set grade function
    const handleSetGrade = (e: string) => {
        setGrade(e);
    };
    //set subject function
    const handleSetSubject = async (e: string) => {
        SetSubjectData({ e: e, setSubject: setSubject });
    };
    //get subject groupd from firebase
    GetSubjectGroupData({
        setSubject: setSubject,
        setArrSubject: setArrSubject,
    });

    //set quanity elements on table function
    const handleElementQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        UsePreventTextAndMaxValue({
            maxValue: 6,
            setState: setElementQuantity,
            event: e,
            setStateFake: setDisplayElementQuantity,
        });
    };
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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

                    <div className="flex flex-col h-full pl-[20px] w-full   ">
                        {/* //title */}
                        <div className="flex items-center gap-5">
                            <TitlePage subTitle="Bài kiểm tra">Danh sách bài kiểm tra</TitlePage>
                        </div>
                        <div className=" w-[98.5%] flex justify-between items-center mt-6 h-[8%]">
                            <div className="flex items-center gap-3 w-full h-full">
                                <ButtonTypeHeader
                                    value={1}
                                    currentType={typeTest}
                                    handleType={handleTypeTest}
                                    label="Tất cả bài kiểm tra"
                                />
                                <ButtonTypeHeader
                                    value={2}
                                    currentType={typeTest}
                                    handleType={handleTypeTest}
                                    label="bài kiểm tra chuẩn bị tới"
                                />
                                <ButtonTypeHeader
                                    value={3}
                                    currentType={typeTest}
                                    handleType={handleTypeTest}
                                    label="bài kiểm tra đã chấm"
                                />
                                <ButtonTypeHeader
                                    value={4}
                                    currentType={typeTest}
                                    handleType={handleTypeTest}
                                    label="bài kiểm tra chưa chấm"
                                />
                            </div>
                            <div className="w-[13%]">
                                <ActionButton bgColor="#ff7506" textColor="white" content="Thêm bài kiểm tra" />
                            </div>
                        </div>

                        <div className="w-[98.5%] h-[78%] bg-white shadow-statiticsResultStudy relative z-[10]  rounded-tr-lg  rounded-br-lg rounded-bl-lg">
                            <div className="pt-7 px-7 w-full h-full">
                                <div className="w-full flex items-end justify-between">
                                    <div className="w-[55%] flex gap-10 items-end">
                                        <div className="flex flex-1">
                                            <DropdownSelector
                                                title="Chọn môn"
                                                value={subject}
                                                options={arrSubject}
                                                openOption={openOption}
                                                onToggleOption={handleOpenOpention}
                                                onSelectOption={handleSetSubject}
                                                id={1}
                                            />
                                        </div>
                                        <div className="flex flex-1">
                                            <DropdownSelector
                                                title="Chọn khối"
                                                value={grade}
                                                options={arrGrade}
                                                openOption={openOption}
                                                onToggleOption={handleOpenOpention}
                                                onSelectOption={handleSetGrade}
                                                id={2}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 flex-1 exam-list-pagination">
                                            <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight">
                                                Chọn ngày
                                            </div>
                                            <DatePicker
                                                format="DD/MM/YYYY"
                                                size="small"
                                                placeholder="DD/MM/YYYY"
                                                suffixIcon={<CalendarOrange />}
                                            />
                                        </div>
                                        <div className="flex justify-center text-[#fff9f4]  text-base font-semibold font-sourceSansPr cursor-pointer w-[15%] h-8 pl-[15px] pr-3.5 py-1.5 bg-[#ff7506] rounded  items-center overflow-hidden">
                                            Lọc kết quả
                                        </div>
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
                                <Classes
                                    type={'examList'}
                                    Listicon={[<ICircle />]}
                                    classes={currentClasses}
                                    subject={subject}
                                    typeClass={1}
                                    ElementQuantity={ElementQuantity}
                                    headerTable={headersTable(<DoubleArrow />)}
                                />
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
                                <div className="exameList-pagination absolute right-8 bottom-3">
                                    <Pagination
                                        onChange={handlePageChange}
                                        current={currentPage}
                                        total={arrValueExam.length}
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

export default ExamList;
