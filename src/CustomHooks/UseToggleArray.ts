import { UseToggleArrayProps } from '~/types/UseToggleArrayProps/UseToggleArrayProps';

const UseToggleArray = ({ id, setState }: UseToggleArrayProps): void => {
    setState((prev) => {
        if (prev.includes(id)) {
            return prev.filter((item) => item !== id);
        } else {
            return [...prev, id];
        }
    });
};

export default UseToggleArray;
