import { ref, get } from 'firebase/database';
import Databasez from '~/firebase';

interface Subject {
    name: string;
    classes: string[];
}

interface GroupSubject {
    name: string;
    level: string;
    Subject: {
        Subject1: Subject;
        Subject2: Subject;
        Subject3: Subject;
    };
}

interface SubjectGroupData {
    [key: string]: GroupSubject;
}

interface SetGroupSubjectDataProps {
    e: string;
    setGroupSubject: (groupSubject: string) => void;
    setArrSubject: (subjects: string[]) => void;
    setSubject: (subjectName: string) => void;
    setClasses: (classes: string[]) => void;
}

const SetGroupSubjectData = async ({
    e,
    setGroupSubject,
    setArrSubject,
    setSubject,
    setClasses,
}: SetGroupSubjectDataProps) => {
    const subjectGroupRef = ref(Databasez, 'Elearning/SubjectGroup');

    try {
        const snapshot = await get(subjectGroupRef);

        if (snapshot.exists()) {
            const subjectGroupData: SubjectGroupData = snapshot.val();

            Object.keys(subjectGroupData).forEach((groupKey) => {
                const group = subjectGroupData[groupKey];

                if (group.name === e) {
                    setGroupSubject(`${group.level} - ${group.name}`);

                    const subjects = [
                        group.Subject.Subject1.name,
                        group.Subject.Subject2.name,
                        group.Subject.Subject3.name,
                    ];

                    setArrSubject(subjects);
                    setSubject(group.Subject.Subject1.name);
                    setClasses(group.Subject.Subject1.classes);
                }
            });
        } else {
            console.log('No data available in SubjectGroup');
        }
    } catch (error) {
        console.error('Error fetching data from Firebase:', error);
    }
};

export default SetGroupSubjectData;
