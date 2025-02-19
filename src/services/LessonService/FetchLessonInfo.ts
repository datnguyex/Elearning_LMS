import Lesson from '~/types/ClassInmation/Lesson';
import Databasez from '../../firebase';
import { ref, get } from 'firebase/database';

interface Props {
    setState: React.Dispatch<React.SetStateAction<Lesson[]>>;
}

export const FetchLessionInfo = async ({ setState }: Props) => {
    try {
        const lessonsRef = ref(Databasez, 'Elearning/lesson');
        const snapshot = await get(lessonsRef);
        if (snapshot.exists()) {
            const dataValue = Object.values(snapshot.val());
            console.log('data:', dataValue);
            setState(dataValue as Lesson[]);
        } else {
            console.log('no have any data.');
        }
    } catch (error) {
        console.error('have some errors:', error);
    }
};
