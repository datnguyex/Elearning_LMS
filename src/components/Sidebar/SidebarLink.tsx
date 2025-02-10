import { Link } from 'react-router-dom';

type SidebarLinkProps = {
    to: string;
    label: string;
    isActive: boolean;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, label, isActive }) => (
    <Link
        to={to}
        className={`text-base cursor-pointer p-[1px] font-sourceSansPro leading-tight mt-[2vh] ${isActive ? 'font-bold' : 'text-[#373839] font-normal'}`}
    >
        {label}
    </Link>
);

export default SidebarLink;
