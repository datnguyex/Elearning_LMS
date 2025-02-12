import { UserCircleOrange } from '~/assets/Icons/Icons';

function PositionUserInfo() {
    return (
        <div className="absolute top-5 right-12 cursor-pointer">
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center">
                    <UserCircleOrange />

                    <div className=" text-[#373839] text-base font-bold font-['Source Sans Pro'] tracking-tight">
                        Thanh Tâm
                    </div>
                </div>

                <div className="w-px h-9   bg-[#823b00]" />
                <div className="text-[#ff7506] text-base font-normal font-['Source Sans Pro'] leading-tight">
                    Đăng xuất
                </div>
            </div>
        </div>
    );
}

export default PositionUserInfo;
