import React from 'react';

// headers.js
export const headersTable = (typeClass: number, iconProps: React.ReactNode) => [
    { title: 'Mã lớp', isVisible: true, icon: iconProps },
    { title: 'Môn học', isVisible: true, icon: iconProps },
    { title: 'Thời gian', isVisible: true, icon: iconProps },
    { title: 'Giảng viên', isVisible: true, icon: iconProps },
    { title: 'Trạng thái', isVisible: typeClass !== 2, icon: iconProps },
];
