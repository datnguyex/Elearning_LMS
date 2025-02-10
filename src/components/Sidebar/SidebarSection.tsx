import { Link } from 'react-router-dom';

type SidebarSectionProps = {
    icon: React.ElementType;
    title: string;
    isActive: boolean;
    children?: React.ReactNode;
    to?: string; // Thêm prop to cho Link
};

const SidebarSection: React.FC<SidebarSectionProps> = ({ icon: Icon, title, isActive, children, to }) => {
    const content = (
        <div
            className={`text-lg cursor-pointer p-[1px] font-extrabold font-mulish tracking-tight ${isActive ? 'text-[#ff7506]' : 'text-[#373839]'}`}
        >
            {title}
        </div>
    );

    if (children) {
        return (
            <div className="flex items-start mt-[3vh]">
                <Icon color={isActive ? '#ff7506' : '#999999'} />
                <div className="flex flex-col">
                    {content}
                    {children}
                </div>
            </div>
        );
    }

    if (to) {
        return (
            <Link to={to} className="flex items-start mt-[3vh]">
                <Icon color={isActive ? '#ff7506' : '#999999'} />
                <div className="flex flex-col">{content}</div>
            </Link>
        );
    }

    return null;
};

export default SidebarSection;
