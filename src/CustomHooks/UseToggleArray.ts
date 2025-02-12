import React from 'react';
import { UseToggleArrayProps } from '~/types/UseToggleArrayProps/UseToggleArrayProps';

const UseToggleArray = ({ courseId, setActiveCourses }: UseToggleArrayProps): void => {
    setActiveCourses((prev) => {
        if (prev.includes(courseId)) {
            return prev.filter((id) => id !== courseId);
        } else {
            return [...prev, courseId];
        }
    });
};

export default UseToggleArray;
