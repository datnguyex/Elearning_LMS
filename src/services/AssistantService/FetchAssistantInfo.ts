import { Databasez } from './../../firebase';
import React, { useEffect } from 'react';
import { ref, get } from 'firebase/database';

interface FetchAssistantInfoProps {
    setState: React.Dispatch<React.SetStateAction<string[]>>;
}

const FetchAssistantInfo: React.FC<FetchAssistantInfoProps> = ({ setState }) => {
    const handGetAssistantInfo = async () => {
        const assistantRef = ref(Databasez, 'Elearning/assistant');
        try {
            const snapshot = await get(assistantRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const arrayData = Object.values(data).map((item) => (item as { name: string }).name);
                setState(arrayData);
            }
        } catch (err) {
            console.log('Something went wrong while fetching assistant info:', err);
        }
    };

    useEffect(() => {
        handGetAssistantInfo();
    }, []);

    return null;
};

export default FetchAssistantInfo;
