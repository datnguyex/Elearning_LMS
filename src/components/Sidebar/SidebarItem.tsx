import { Link } from 'react-router-dom';

interface SidebarItemProps {
    handleSidebarToggle: (e: boolean) => void;
    location: any;
    to: string;
    Icon: React.ComponentType<{ width: string; height: string; color: string }>;
    width: string;
    height: string;
}
function SidebarItem({ handleSidebarToggle, location, to, Icon, width, height }: SidebarItemProps) {
    return (
        <>
            <Link
                to={to}
                onMouseEnter={() => handleSidebarToggle(true)}
                onMouseLeave={() => handleSidebarToggle(false)}
                className="w-[71%] aspect-square rounded-2xl relative flex justify-center items-center cursor-pointer"
            >
                <div
                // className={`absolute inset-0 rounded-2xl ${selectedItem === to ? 'bg-red-300 opacity-50' : ''}`}
                ></div>
                <div className="absolute z-[10] ">
                    <Icon width={width} height={height} color={'#ffff'} />
                </div>
            </Link>
        </>
    );
}

export default SidebarItem;
