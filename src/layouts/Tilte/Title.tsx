import { ArrowWhite } from '~/assets/Icons/Icons';

interface TitleProps {
    subTitle?: string;
    children: React.ReactNode;
}

function TitlePage({ subTitle, children }: TitleProps) {
    return (
        <>
            <div className="flex items-center gap-5">
                {subTitle && (
                    <>
                        <div className="text-[#c8c4c0] text-lg font-extrabold font-Mulish tracking-tight">
                            Quản lý lớp học
                        </div>
                        <div className="rotate-[-90deg]">
                            <ArrowWhite color={'#FF7506'} />
                        </div>
                    </>
                )}
            </div>
            <div className="text-[#373839] text-5xl font-bold font-Mulish tracking-wide">{children}</div>
        </>
    );
}

export default TitlePage;
