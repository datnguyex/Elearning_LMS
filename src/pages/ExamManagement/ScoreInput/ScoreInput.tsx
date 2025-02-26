import { useState } from 'react';
import ActionButton from 'src/components/Button/ActionButton';

import DropdownSelector from 'src/components/ClassList/DropdownSelector';
import PositionBackgroundIcons from 'src/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from 'src/components/PositionUserInfo/PositionUserInfo';
import AssignmentDetail from 'src/components/ScoreInput/AssignmentDetail';
import MainInfomation from 'src/components/ScoreInput/MainInfomation';
import PoinAndComment from 'src/components/ScoreInput/PoinAndComment';
import StudentTable from 'src/components/ScoreInput/StudentTable';
import UseToggleArray from 'src/CustomHooks/UseToggleArray';
import Sidebar from 'src/layouts/Sidebar/Sidebar';
import TitlePage from 'src/layouts/Tilte/Title';

function ScoreInput() {
    //type test array
    const arrTypeTest = ['Tất cả', 'Chưa chấm', 'Đã chấm'];

    //type test state
    const [typeTest, setTypeTest] = useState('Chưa chấm');

    //open option state
    const [openOption, setOpenOption] = useState<number[]>([]);

    //set type test function
    const handleSetTypeTest = (e: string) => {
        setTypeTest(e);
    };

    //push id options to openOption state function
    const handleOpenOpention = (id: number) => {
        UseToggleArray({ id: id, setState: setOpenOption });
    };

    return (
        <>
            <div className="flex justify-start max-w-[100vw] h-[115vh] max-h-[115h] relative overflow-hidden">
                <Sidebar />
                <div className="w-full ml-[6%] flex mt-[6vh]">
                    {/* //position backgroun icon */}
                    <PositionBackgroundIcons />
                    {/* //user info */}
                    <PositionUserInfo />
                    <div className="flex flex-col h-full pl-[20px] w-full">
                        {/* //title */}
                        <div className="flex items-center gap-5">
                            <TitlePage subTitle="Quản lý bài kiểm tra">Chấm điểm</TitlePage>
                        </div>
                        <div className="w-[98.5%] flex justify-end">
                            <div className="w-[7%]">
                                <ActionButton content="Chốt điểm" bgColor="#ff7506" textColor="white" />
                            </div>
                        </div>
                        <div className="w-[98.5%] min-h-[99%]  relative z-[10]  rounded-tr-lg  rounded-br-lg rounded-bl-lg mt-10 flex gap-3">
                            {/* //item-left */}
                            <div className="w-[30%] h-full flex flex-col gap-3">
                                <MainInfomation />
                                {/* //item */}
                                <div className="flex items-center justify-between mx-7 mt-4">
                                    <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight">
                                        Danh sách học viên:
                                    </div>
                                    <div className="w-[40%]">
                                        <DropdownSelector
                                            value={typeTest}
                                            options={arrTypeTest}
                                            openOption={openOption}
                                            onToggleOption={handleOpenOpention}
                                            onSelectOption={handleSetTypeTest}
                                            id={1}
                                        />
                                    </div>
                                </div>
                                <StudentTable />
                            </div>
                            <div className="flex-1 h-[90%] bg-white shadow-statiticsResultStudy rounded flex items-center">
                                <div className="w-[70%] max-h-[99%] h-full overflow-y-auto overflow-x-hidden">
                                    <AssignmentDetail />
                                </div>
                                <div className="flex-1 h-full pt-8">
                                    <PoinAndComment />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScoreInput;
