import { useState, useEffect } from 'react';
import moment from 'moment';

const GetTimeData = () => {
    // Chỉ định kiểu dữ liệu cho useState
    const [arrayHours, setArrayHours] = useState<string[]>([]);
    const [arrayMinute, setArrayMinute] = useState<string[]>([]);
    const [times, setTimes] = useState<string[]>([]);

    useEffect(() => {
        let hours: string[] = [];
        let minutes: string[] = [];
        let timeSlots: string[] = [];

        // Tạo mảng giờ
        for (let hour = 0; hour < 24; hour++) {
            let formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
            hours.push(formattedHour);
        }
        setArrayHours(hours);

        // Tạo mảng phút
        for (let minute = 1; minute < 60; minute++) {
            let formattedMinute = minute < 10 ? `0${minute}` : `${minute}`;
            minutes.push(formattedMinute);
        }
        setArrayMinute(minutes);

        // Tạo mảng thời gian theo từng giờ và 30 phút
        for (let hour = 0; hour < 24; hour++) {
            let time1 = moment().hours(hour).minutes(0).format('HH:mm');
            timeSlots.push(time1);

            let time2 = moment().hours(hour).minutes(30).format('HH:mm');
            timeSlots.push(time2);
        }
        setTimes(timeSlots);
    }, []);

    return { arrayHours, arrayMinute, times };
};

export default GetTimeData;
