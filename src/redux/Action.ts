import { createAsyncThunk } from '@reduxjs/toolkit';

// Định nghĩa action với kiểu trả về là number
export const HandleTypeClassAction = createAsyncThunk<number, number>('typeClass', async (value) => {
    return value;
});
