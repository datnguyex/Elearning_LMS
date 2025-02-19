import { ArrowWhite } from '~/assets/Icons/Icons';
import { motion } from 'framer-motion';

interface DropdownSelectorProps {
    title?: string;
    value?: string | number;
    options?: string[] | number[];
    openOption?: any;
    onToggleOption?: (id: number) => void;
    onSelectOption?: (selectedValue: any) => void;
    id?: number;
    Icon?: React.ElementType;
    color?: string;
    width?: string;
    height?: string;
    borderNone?: boolean;
    borderColor?: string;
}

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
    title = '',
    value = '',
    options = [],
    openOption = [],
    onToggleOption = () => {},
    onSelectOption = () => {},
    id = -1,
    Icon = ArrowWhite,
    color = '#FF7506',
    width = '20px',
    height = '20px',
    borderNone = false,
    borderColor = '#373839',
    // border-[#C9C4C0]
}) => {
    return (
        <div className="flex flex-col justify-center gap-2 w-full ">
            {title && <div className="text-[#373839] text-lg font-bold font-Mulish tracking-tight">{title}</div>}
            <div
                className={`h-8 rounded border border-[${borderColor}] relative z-[10] bg-white inline-block pr-[30px]`}
            >
                <div className="text-[#373839] pl-3 pr-8 text-base font-normal font-sourceSansPro leading-none flex items-center h-full z-[20]">
                    {value}
                </div>
                <div
                    onClick={() => onToggleOption(id)}
                    className={`h-full w-[30px] cursor-pointer absolute top-0 right-0 flex items-center justify-center z-[20] ${borderNone == false ? `border-l border-[${borderColor}]` : ''}`}
                >
                    <Icon color={color} width={width} height={height} />
                </div>
                {openOption.includes(id) && (
                    <motion.div
                        className="w-full max-h-[100px] absolute left-0 top-[105%] shadow-optionClassList bg-[#fff] overflow-y-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 2, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {options.map((option, index) => (
                            <div
                                onClick={() => onSelectOption(option)}
                                key={index}
                                className="w-full cursor-pointer opacity-60 flex items-center pl-3 py-2 text-[#373839] text-base font-normal font-sourceSansPro leading-tight z-[10] hover:font-bold active:font-semibold"
                            >
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default DropdownSelector;
