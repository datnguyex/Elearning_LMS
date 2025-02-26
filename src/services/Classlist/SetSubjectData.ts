import { ref, get } from 'firebase/database';
import Databasez from '../../firebase';

interface Subject {
    name: string;
    classes: string[];
}

interface SubjectGroup {
    Subject: Record<string, Subject>;
}

interface SubjectGroups {
    [key: string]: SubjectGroup;
}

interface SetSubjectDataProps {
    e?: string;
    setSubject?: (subjectName: string) => void;
    setClasses?: (classes: string[]) => void;
}

const SetSubjectData = async ({ e, setSubject, setClasses }: SetSubjectDataProps) => {
    const subjectGroupRef = ref(Databasez, 'Elearning/SubjectGroup');

    try {
        // Fetch data from Firebase
        const snapshot = await get(subjectGroupRef);
        if (snapshot.exists()) {
            const subjectGroups: SubjectGroups = snapshot.val();

            for (let key in subjectGroups) {
                if (subjectGroups.hasOwnProperty(key)) {
                    const value = subjectGroups[key];
                    const subjects = value.Subject;

                    for (let subjectKey in subjects) {
                        if (subjects.hasOwnProperty(subjectKey)) {
                            const subject = subjects[subjectKey];
                            const subjectName = subject.name;

                            // Compare subject name with e

                            if (subjectName == e) {
                                if (setSubject) {
                                    setSubject(subjectName);
                                }
                                if (setClasses) {
                                    setClasses(subject.classes);
                                }
                            }
                        }
                    }
                }
            }
        } else {
            console.log('No data available');
        }
    } catch (error) {
        console.error('Error fetching data from Firebase:', error);
    }
};

export default SetSubjectData;
