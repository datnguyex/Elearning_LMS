import { ref, get } from 'firebase/database';
import { Databasez } from '../../firebase';
// hoặc các dịch vụ Firebase bạn sử dụng

import FetchSubjectsServiceProps from '~/types/FetchSubjectServiceProps/FetchSubjectServiceProps';

const FetchSubjects = async ({ setSubjects }: FetchSubjectsServiceProps) => {
    try {
        const subjectsRef = ref(Databasez, 'Elearning/Semester/Semester1/Schedule/Subject');
        const snapshot = await get(subjectsRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const subjectsArray = Object.values(data);
            setSubjects(subjectsArray);
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error loading data from Firebase:', error);
    }
};

export default FetchSubjects;
