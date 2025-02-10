import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    BellGrey,
    BellWhite,
    BookWhite,
    CalendarGrey,
    CalendarWhite,
    EyeGrey,
    EyeWhite,
    ListPenGrey,
    ListPenWhite,
    QuestionCommentGrey,
    QuestionCommentWhite,
} from '~/assets/Icons/Icons';
import { ElearningLogoWhite } from '~/assets/images';
import SidebarItem from '~/components/Sidebar/SidebarItem';
import { useLocation } from 'react-router-dom';
import SidebarSection from '~/components/Sidebar/SidebarSection';
import SidebarLink from '~/components/Sidebar/SidebarLink';

function Sidebar() {
    //location hook
    const location = useLocation();

    //hide or open sidebar state
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //open or hide sidebar function
    const handleSidebarToggle = (e: boolean) => {
        setIsSidebarOpen(e);
    };
    console.log('isSidebarOpen', isSidebarOpen);

    //state selected
    const [selectedItem, setSelectedItem] = useState<number>(1);

    //select sidebar item
    const handleSelected = (id: number) => {
        setSelectedItem(id);
    };
    return (
        <>
            {/* h-1080 w-1920 */}
            {/* //w-76px h-1080*/}
            <div className="relative h-[100vh] shadow-Sidebar bg-gradient-to-t from-[#ff5400] to-[#f17f21] w-[6%] overflow-hidden rounded-2xl flex flex-col items-center justify-center z-[10]">
                <div className="w-[100%] h-full flex flex-col items-center">
                    <div className="w-[65%] h-auto my-[5vh]">
                        <img className="w-full h-full" src={ElearningLogoWhite} alt="Logo" />
                    </div>
                    <div className="w-full h-full flex flex-col items-center">
                        <SidebarItem
                            location={location}
                            handleSidebarToggle={handleSidebarToggle}
                            to={'/overview'}
                            Icon={EyeWhite}
                            width="28"
                            height="21"
                        />

                        <SidebarItem
                            location={location}
                            handleSidebarToggle={handleSidebarToggle}
                            to={'/class-list'}
                            Icon={BookWhite}
                            width="28"
                            height="21"
                        />
                        <SidebarItem
                            location={location}
                            handleSidebarToggle={handleSidebarToggle}
                            to={'/exam-list'}
                            Icon={ListPenWhite}
                            width="28"
                            height="21"
                        />
                        <SidebarItem
                            location={location}
                            handleSidebarToggle={handleSidebarToggle}
                            to={'/exam-schedule'}
                            Icon={CalendarWhite}
                            width="28"
                            height="21"
                        />
                        <SidebarItem
                            location={location}
                            handleSidebarToggle={handleSidebarToggle}
                            to={'/notifications'}
                            Icon={BellWhite}
                            width="28"
                            height="21"
                        />
                        <SidebarItem
                            location={location}
                            handleSidebarToggle={handleSidebarToggle}
                            to={'/help'}
                            Icon={QuestionCommentWhite}
                            width="28"
                            height="21"
                        />
                    </div>
                </div>
            </div>
            <motion.div
                onMouseEnter={() => setIsSidebarOpen(true)}
                onMouseLeave={() => setIsSidebarOpen(false)}
                initial={{ x: '-100%' }}
                animate={{ x: isSidebarOpen ? '0%' : '-150%' }}
                transition={{ type: 'spring', stiffness: 50 }}
                className="absolute h-[100vh] w-[15%] shadow-ChildrentSidebar left-[6%] top-0 overflow-hidden z-[5]"
            >
                <div className="mt-[18vh] translate-x-[12%] inline-block">
                    <SidebarSection
                        icon={EyeGrey}
                        title="Tổng quan"
                        isActive={location.pathname === '/overview'}
                        to="/overview"
                    />
                    <SidebarSection
                        icon={BookWhite}
                        title="Quản lý lớp học"
                        isActive={['/class-list', '/add-class-schedule', '/join-class-schedule'].includes(
                            location.pathname,
                        )}
                    >
                        <SidebarLink
                            to="/class-list"
                            label="Danh sách lớp học"
                            isActive={location.pathname === '/class-list'}
                        />
                        <SidebarLink
                            to="/add-class-schedule"
                            label="Thêm buổi học mới"
                            isActive={location.pathname === '/add-class-schedule'}
                        />
                        <SidebarLink
                            to="/join-class-schedule"
                            label="Tham gia vào lớp học"
                            isActive={location.pathname === '/join-class-schedule'}
                        />
                    </SidebarSection>

                    <SidebarSection
                        icon={ListPenGrey}
                        title="Bài kiểm tra"
                        isActive={['/exam-list', '/score-input', '/grade-table'].includes(location.pathname)}
                    >
                        <SidebarLink
                            to="/exam-list"
                            label="Danh sách bài kiểm tra"
                            isActive={location.pathname === '/exam-list'}
                        />
                        <SidebarLink
                            to="/score-input"
                            label="Nhập điểm"
                            isActive={location.pathname === '/score-input'}
                        />
                        <SidebarLink
                            to="/grade-table"
                            label="Bảng điểm"
                            isActive={location.pathname === '/grade-table'}
                        />
                    </SidebarSection>

                    <SidebarSection
                        icon={CalendarGrey}
                        title="Lịch thi"
                        isActive={location.pathname === '/exam-schedule'}
                        to="/exam-schedule"
                    />

                    <SidebarSection
                        icon={BellGrey}
                        title="Thông báo"
                        isActive={location.pathname === '/notifications'}
                        to="/notifications"
                    />

                    <SidebarSection
                        icon={QuestionCommentGrey}
                        title="Trợ giúp"
                        isActive={location.pathname === '/help'}
                        to="/help"
                    />
                </div>
            </motion.div>
        </>
    );
}

export default Sidebar;
