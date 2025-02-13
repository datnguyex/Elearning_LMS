import { useEffect, useState } from 'react';
import CourseOverview from '~/components/Overview/CourseOverview';
import Sidebar from '~/layouts/Sidebar/Sidebar';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, ChartData } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import StatisticItem from '~/components/Overview/StatisticItem';
import PositionUserInfo from '~/components/PositionUserInfo/PositionUserInfo';
import PositionBackgroundIcons from '~/components/PositionBackgroundIcons/PositionBackgroundIcons';
import SubjectCard from '~/components/Overview/SubjectCard';
import UseToggleArray from '~/CustomHooks/UseToggleArray';
import { CreateGradientColor } from '~/utils/CreateGradientColor';
import FetchSubjects from '~/services/SubjectService/FetchSubjectsService';

ChartJS.register(Title, Tooltip, Legend, ArcElement, ChartDataLabels);

function Overview() {
    //assign value

    //  courses state
    const [activeCourses, setActiveCourses] = useState<number[]>([1, 2]);

    //subjects state
    const [subjects, setSubjects] = useState<any[]>([]);
    useEffect(() => {
        FetchSubjects({ setSubjects: setSubjects }); // Gọi hàm dịch vụ
    }, []);

    // display courses function
    const handleDisplayCourse = (courseId: number) => {
        UseToggleArray({ id: courseId, setState: setActiveCourses });
    };

    //data pie chart
    const data: ChartData<'pie'> = {
        labels: ['Số học sinh khá', 'Số học sinh trung binh', 'Số học sinh giỏi'],
        datasets: [
            {
                label: 'Thống kê:',
                data: [25, 15, 60],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return;
                    }

                    // make gradient background color pie chart
                    const gradients = [
                        // Cập nhật gọi hàm theo cách sử dụng đối tượng
                        CreateGradientColor({ ctx, chartArea, color1: '#fdc830', color2: '#f37335' }), // Gradient 1
                        CreateGradientColor({ ctx, chartArea, color1: '#45b649', color2: '#49c40f' }), // Gradient 2
                        CreateGradientColor({ ctx, chartArea, color1: '#56ccf2', color2: '#2f80ed' }), // Gradient 3
                    ];

                    return gradients[context.dataIndex]; // Return gradient based on index
                },
                borderWidth: (context) => {
                    const borderWidths = [0, 3, 4];
                    return borderWidths[context.dataIndex];
                },
            },
        ],
    };

    //option pie chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                align: 'start' as const,
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        let value = context.raw;
                        let percentage = value + '%';
                        return `Thống kê: ${percentage}`;
                    },
                },
            },
        },
    };

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
                    {/* //item-left */}
                    <div className="flex flex-col h-full w-[40%] pl-[20px]">
                        <div className="text-[#373839] text-5xl font-bold font-Mulish tracking-wide">Tổng quan</div>
                        {/* w-[1207px]  h-1080*/}
                        <div className="w-full h-full mt-6">
                            {/* courses */}
                            <div className="w-full h-[30%] flex flex-wrap gap-6">
                                <CourseOverview
                                    colorFrom="#ff5400"
                                    colorTo="#f17f21"
                                    title="Khóa học của tôi"
                                    count={10}
                                />
                                <CourseOverview
                                    colorFrom="#56ccf2"
                                    colorTo="#2f80ed"
                                    title="Lớp học của tôi"
                                    count={2}
                                />
                                <CourseOverview
                                    colorFrom="#fdc830"
                                    colorTo="#f37335"
                                    title="Bài kiểm tra chưa chấm"
                                    count={8}
                                />
                                <CourseOverview
                                    colorFrom="#2dacee"
                                    colorTo="#0015d9"
                                    title="Hỏi đáp Q & A"
                                    count={10}
                                />
                            </div>
                            {/* student result */}
                            <div className="w-[100%] text-[#373839] text-3xl font-bold font-Mulish tracking-wide mt-[35px]">
                                Thống kê kết quả học tập của học viên
                            </div>
                            {/*w-414px h-202px */}
                            <div className="w-[85%] rounded-2xl h-[40%] bg-white mt-3 shadow-statiticsResultStudy sticky z-[10]">
                                <div className="flex w-full h-full">
                                    {/* //item1 */}
                                    <div className=" flex w-[45%] flex-col items-ari justify-center gap-7">
                                        <Pie data={data} options={options} />

                                        {/* <div className="flex flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-4 bg-gradient-to-r from-[#56ccf2] to-[#2f80ed] rounded-sm" />
                                                <div className="opacity-50 text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                    Tổng số học sinh giỏi
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-4 bg-gradient-to-r from-[#fdc830] to-[#f37335] rounded-sm" />
                                                <div className="opacity-50 text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                    Tổng số học sinh khá
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-4 bg-gradient-to-l from-[#45b649] to-[#dce35b] rounded-sm" />
                                                <div className="opacity-50 text-[#373839] text-base font-normal font-['Source Sans Pro'] leading-tight">
                                                    Tổng số học sinh trung bình
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="w-[55%] justify-end flex items-center">
                                        <div className="w-[90%] flex flex-col gap-4">
                                            <div className="w-[80%] flex flex-col gap-4">
                                                <StatisticItem
                                                    label="Tổng số lớp:"
                                                    value={10}
                                                    textColor="#373839"
                                                    isLast={false}
                                                />
                                                <StatisticItem
                                                    label="Tổng số học sinh giỏi"
                                                    value={300}
                                                    textColor="#2dacee"
                                                    isLast={false}
                                                />
                                                <StatisticItem
                                                    label="Tổng số học sinh khá"
                                                    value={125}
                                                    textColor="#ff7506"
                                                    isLast={false}
                                                />
                                                <StatisticItem
                                                    label="Tổng số học sinh trung bình"
                                                    value={75}
                                                    textColor="#49c40f"
                                                    isLast={false}
                                                />
                                                <StatisticItem
                                                    label="Tổng số học sinh yếu"
                                                    value={0}
                                                    textColor="#c8c4c0"
                                                    isLast={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[60%] h-full ">
                        <div className="text-[#373839] text-5xl font-extrabold font-['Mulish'] tracking-wide mb-4">
                            Tất cả khóa học
                        </div>

                        <div className="h-full w-full flex flex-col">
                            <div className="overflow-y-auto w-[97%] max-h-[86vh] relative bg-white z-[10] shadow-semesterTable">
                                <SubjectCard
                                    id={1}
                                    subjects={subjects}
                                    activeCourses={activeCourses}
                                    handleDisplayCourse={handleDisplayCourse}
                                />
                                <SubjectCard
                                    id={2}
                                    subjects={subjects}
                                    activeCourses={activeCourses}
                                    handleDisplayCourse={handleDisplayCourse}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Overview;
