import { motion } from 'framer-motion';

interface SelectableCardProps {
    onClick: () => void;
    typePage: number;
    index: number;
    text: string;
}

const SelectableCard: React.FC<SelectableCardProps> = ({ onClick, typePage, index, text }) => {
    return (
        <motion.div
            onClick={onClick}
            className={`w-[48%] cursor-pointer h-[76%] rounded-[28px] text-lg font-bold font-Mulish tracking-tight flex items-center justify-center ${
                typePage === index ? 'bg-[#373839] text-[#fff]' : 'bg-transparent text-[#373839] opacity-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {text}
        </motion.div>
    );
};

export default SelectableCard;
