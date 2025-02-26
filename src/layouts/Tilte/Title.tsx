import { ArrowWhite } from 'src/assets/Icons/Icons';

interface TitleProps {
    subTitle?: string;
    children: React.ReactNode;
}

function TitlePage({ subTitle, children }: TitleProps) {
    return (
        <>
            <div className="flex items-center">
                <div className="flex items-center gap-5">
                    {subTitle && (
                        <>
                            <div className="flex items-center">
                                <div className="text-[#c8c4c0] text-lg font-extrabold font-Mulish tracking-tight">
                                    {subTitle}
                                </div>
                                <div className="rotate-[-90deg]">
                                    <ArrowWhite color={'#FF7506'} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="text-[#373839] text-5xl font-bold font-Mulish tracking-wide">{children}</div>
            </div>
        </>
    );
}

export default TitlePage;
