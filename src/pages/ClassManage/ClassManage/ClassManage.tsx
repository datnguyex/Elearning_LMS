import { useEffect, useState } from 'react';
import SelectableCard from '~/components/ClassInfomation/SelectableCard';
import PositionBackgroundIcons from '~/components/PositionBackgroundIcons/PositionBackgroundIcons';
import PositionUserInfo from '~/components/PositionUserInfo/PositionUserInfo';
import Sidebar from '~/layouts/Sidebar/Sidebar';
import TitlePage from '~/layouts/Tilte/Title';
import ClassInfomation from '../ClassInfomation/ClassInfomation';
import QuestionAndAnswer from '../QuestionAndAnswer/QuestionAndAnswer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { HandleTypeClassAction } from '~/redux/Action';
import { StoreReducer } from '~/redux/Store';

function ClassMange() {
    //use dispatch hook
    const dispatch = useDispatch();

    //get initial value of typeclass reduct
    const TypeClassFilter = useSelector((state: any) => state.typeClass.typeFilters);

    //type page state
    const [typePage, setTypePage] = useState(TypeClassFilter);
    //set type page function
    const HandsetTypePage = (e: number) => {
        StoreReducer.dispatch(HandleTypeClassAction(e));
    };

    //set type page state if typeclassfilter changed
    useEffect(() => {
        setTypePage(TypeClassFilter);
    }, [TypeClassFilter]);
    return (
        <>
            {/* h-a1080 w-1920 */}
            <div
                className="flex justify-start max-w-[100vw] overflow-x-hidden overflow-y-hidden
             relative min-h-[125vh] "
            >
                <Sidebar />
                <div className="w-full ml-[6%] flex mt-[6vh]">
                    {/* //position backgroun icon */}
                    <PositionBackgroundIcons />
                    {/* //user info */}
                    <PositionUserInfo />
                    <div className="flex flex-col h-full w-full pl-[20px]">
                        <div className="flex items-center gap-5">
                            <TitlePage subTitle="Quản lý lớp học">Lịch sử</TitlePage>
                        </div>
                        {/* //type page btn */}
                        <div className="w-[26%] h-[30px] mt-4 relative rounded-3xl bg-[#f2f2f2] flex items-center justify-center">
                            <SelectableCard
                                onClick={() => HandsetTypePage(1)}
                                typePage={typePage}
                                index={1}
                                text="Thông tin lớp học"
                            />
                            <SelectableCard
                                onClick={() => HandsetTypePage(2)}
                                typePage={typePage}
                                index={2}
                                text="Hỏi đáp Q & A"
                            />
                        </div>
                        {typePage == 1 ? <ClassInfomation /> : <QuestionAndAnswer />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ClassMange;
