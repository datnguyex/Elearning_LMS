import { GetSubjectGroupDataProps } from './../../types/ClassList/GetSubjectGroupDataProps';
import React, { useEffect } from 'react';
import Databasez from 'src/firebase';
import { ref, get } from 'firebase/database';

const GetSubjectGroupData: React.FC<GetSubjectGroupDataProps> = ({
    setClasses,
    setArrGroupSubject,
    setGroupSubject,
    setSubject,
    setArrSubject,
}) => {
    useEffect(() => {
        const fetchData = async () => {
            const subjectGroupRef = ref(Databasez, 'Elearning/SubjectGroup');
            try {
                const snapshot = await get(subjectGroupRef);
                if (snapshot.exists()) {
                    const subjectGroupData = snapshot.val();
                    console.log('subjectGroupData', subjectGroupData);

                    const groupNames = Object.keys(subjectGroupData).map((groupKey) => {
                        return subjectGroupData[groupKey].name;
                    });
                    if (setClasses) {
                        setClasses(subjectGroupData.SubjectGroup1.Subject.Subject3.classes);
                    }
                    const total = Object.keys(subjectGroupData.SubjectGroup1.Subject.Subject3.classes).length;
                    if (setArrGroupSubject) {
                        setArrGroupSubject(groupNames);
                    }
                    if (setGroupSubject) {
                        setGroupSubject(
                            subjectGroupData.SubjectGroup1.level +
                                ' ' +
                                '-' +
                                ' ' +
                                subjectGroupData.SubjectGroup1.name,
                        );
                    }
                    if (setSubject) {
                        setSubject(subjectGroupData.SubjectGroup1.Subject.Subject3.name);
                    }

                    const subjects: string[] = [
                        subjectGroupData.SubjectGroup1.Subject.Subject1.name,
                        subjectGroupData.SubjectGroup1.Subject.Subject2.name,
                        subjectGroupData.SubjectGroup1.Subject.Subject3.name,
                    ];

                    if (setArrSubject) {
                        setArrSubject(subjects);
                    }
                } else {
                    console.log('Không có dữ liệu trong SubjectGroup');
                }
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ Firebase:', error);
            }
        };

        fetchData();
    }, [setClasses, setArrGroupSubject, setGroupSubject, setSubject, setArrSubject]);

    return null;
};

export default GetSubjectGroupData;
