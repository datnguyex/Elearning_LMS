import { Checkbox } from 'antd';
import LinkInput from 'src/components/TeacherForm/LinkInput';
import PasswordInput from 'src/components/TeacherForm/PasswordInput';

function FormThree() {
    return (
        <>
            {/* //security */}
            <div className="w-full flex justify-start items-center">
                <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                    Bảo mật
                </div>
                <div className="relative w-[60%]">
                    <PasswordInput />
                </div>
            </div>
            {/* //others option */}
            <div className="flex w-full justify-start items-center">
                <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                    Cài đặt khác
                </div>
                <div className="flex flex-col gap-3">
                    <Checkbox className="checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-end">
                        Tự động kích hoạt buổi học khi đến thời gian bắt đầu
                    </Checkbox>
                    <Checkbox className="checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-end">
                        Bật tính năng lưu lại buổi học
                    </Checkbox>
                    <Checkbox className="checkbox-addClassSchedule text-[#373839] text-base font-normal font-sourceSansPro leading-tight flex items-end">
                        Cho phép học viên/ cá nhân tham gia chia sẻ buổi học
                    </Checkbox>
                </div>
            </div>
            {/* link share */}
            <div className="flex w-full justify-start items-center">
                <div className="text-[#373839] text-base font-bold w-[20%] font-sourceSansPro tracking-tight">
                    Link chia sẻ
                </div>
                <LinkInput />
            </div>
        </>
    );
}

export default FormThree;
