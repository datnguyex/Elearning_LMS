import { useState } from 'react';
import SelectableCard from 'src/components/ClassInfomation/SelectableCard';
import DropdownSelector from 'src/components/ClassList/DropdownSelector';
import PositionBackgroundIcons from 'src/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from 'src/components/PositionUserInfo/PositionUserInfo';
import UseToggleArray from 'src/CustomHooks/UseToggleArray';
import Sidebar from 'src/layouts/Sidebar/Sidebar';
import TitlePage from 'src/layouts/Tilte/Title';
import { Button } from 'antd';
import { ArrowWhite, CheckCircle, DoubleArrow, Search, XCircle, XcircleBackground } from 'src/assets/Icons/Icons';
import SearchComponent from 'src/components/Search/SearchComponent';
import SubjectInfomation from 'src/components/GradeTable/SubjectInfomation';
import StudentScoreTable from 'src/components/GradeTable/StudentScoreTable';
import {
    ClassArr,
    dataTable,
    gradeArr,
    schoolYearArr,
    typeExportFileArr,
} from 'src/assets/Arrays/GradeTable/GradeTable';

function GradeTable() {
    //school year state
    const [schoolYear, setSchoolYear] = useState('2021-2022');

    //subject array
    const subjectArr = ['Toán hình học', 'Toàn đại số', 'Ngữ Văn', 'Vật lý', 'Hóa học'];

    //subject state
    const [Subject, setSubject] = useState('Ngữ văn');

    //type page state
    const [typePage, setTypePage] = useState(2);

    //Class state
    const [Class, setClass] = useState('6A1');

    //grade state
    const [grade, setGrade] = useState(10);

    //type export file state
    const [typeExportFile, setTypeExportFile] = useState('Excel - .xlxs');

    //open option state
    const [openOption, setOpenOption] = useState<number[]>([]);

    //set type page function
    const HandsetTypePage = (e: number) => {
        setTypePage(e);
    };

    //set Class function
    const handleSetClass = (e: string) => {
        setClass(e);
    };

    //set school year function
    const handSetSchoolYear = (e: string) => {
        setSchoolYear(e);
    };

    //set grade function
    const handleSetGrade = (e: number) => {
        setGrade(e);
    };

    //set subject function
    const handleSetSubject = (e: string) => {
        setSubject(e);
    };

    const handleSetTypeExportFile = (e: string) => {
        setTypeExportFile(e);
    };

    //push id options to openOption state function
    const handleOpenOpention = (id: number) => {
        UseToggleArray({ id: id, setState: setOpenOption });
    };

    return (
        <>
            <div className="flex justify-start max-w-[100vw] h-[120vh] max-h-[120vh] relative">
                <Sidebar />
                <div className="w-full ml-[6%] flex mt-[6vh]">
                    {/* //position backgroun icon */}
                    <PositionBackgroundIcons />
                    {/* //user info */}
                    <PositionUserInfo />
                    <div className="flex flex-col h-full pl-[20px] w-full">
                        <TitlePage subTitle="Hồ sơ học viên">Quá trình học tập</TitlePage>
                        {/* //dropdown group */}
                        <div className="flex items-end w-full gap-7 mt-8">
                            <div className="flex w-[45%] gap-10">
                                <DropdownSelector
                                    title="Chọn niên khóa"
                                    value={schoolYear}
                                    options={schoolYearArr}
                                    openOption={openOption}
                                    onSelectOption={handSetSchoolYear}
                                    onToggleOption={handleOpenOpention}
                                    id={1}
                                />
                                <DropdownSelector
                                    title="Chọn bộ môn"
                                    value={Subject}
                                    options={subjectArr}
                                    onSelectOption={handleSetSubject}
                                    openOption={openOption}
                                    onToggleOption={handleOpenOpention}
                                    id={2}
                                />
                                <DropdownSelector
                                    title="Chọn khối"
                                    value={grade}
                                    options={gradeArr}
                                    onSelectOption={handleSetGrade}
                                    openOption={openOption}
                                    onToggleOption={handleOpenOpention}
                                    id={3}
                                />
                                <DropdownSelector
                                    title="Chọn lớp"
                                    value={Class}
                                    options={ClassArr}
                                    onSelectOption={handleSetClass}
                                    openOption={openOption}
                                    onToggleOption={handleOpenOpention}
                                    id={4}
                                />
                            </div>
                            <div className="w-[8%] h-8 pl-6 cursor-pointer pr-[25px] pt-[5px] pb-[7px] bg-[#ffd8b8] rounded border border-[#ff7506] justify-center items-center inline-flex overflow-hidden">
                                <div className="text-center text-[#373839] text-base font-semibold font-['Source Sans Pro']">
                                    Tìm kiếm
                                </div>
                            </div>
                        </div>
                        {/* //line */}
                        <div className="w-[98.5%] border border-[#c8c4c0]  h-[0px] my-6"></div>
                        <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight">
                            Kết quả tìm kiếm
                        </div>
                        <SubjectInfomation>
                            <DropdownSelector
                                value={typeExportFile}
                                options={typeExportFileArr}
                                onSelectOption={handleSetTypeExportFile}
                                openOption={openOption}
                                onToggleOption={handleOpenOpention}
                                id={5}
                            />
                        </SubjectInfomation>
                        <div className="my-6 flex w-[98.5%] justify-between items-center">
                            <div className="flex items-center gap-2 ">
                                <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight">
                                    Bảng điểm của lớp -
                                </div>
                                <div className="text-[#49c40f] text-lg font-bold font-Mulish tracking-tight">
                                    {' '}
                                    35/40 học viên đạt
                                </div>
                            </div>
                            <SearchComponent />
                        </div>
                        <StudentScoreTable dataTable={dataTable} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GradeTable;
