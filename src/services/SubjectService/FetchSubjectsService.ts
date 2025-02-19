// services/FetchSubjectsService.ts
import { getDatabase, ref, get } from 'firebase/database';
import { app } from './../../firebase';
import FetchSubjectsServiceProps from '~/types/FetchSubjectServiceProps/FetchSubjectServiceProps';

const FetchSubjects = ({ setSubjects }: FetchSubjectsServiceProps) => {
    const database = getDatabase(app);
    const subjectsRef = ref(database, 'Elearning/Semester/Semester1/Schedule/Subject');
    get(subjectsRef)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const subjectsArray = Object.values(data);
                setSubjects(subjectsArray);
            } else {
                console.log('No data available');
            }
        })
        .catch((error) => {
            console.error('Error loading data from Firebase:', error);
        });
};

export default FetchSubjects;
