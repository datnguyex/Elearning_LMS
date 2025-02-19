import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HandleTypeClassAction } from './Action';

interface TypeClassType {
    typeFilters: number;
    loading: boolean;
}

const initialState: TypeClassType = {
    typeFilters: 1,
    loading: false,
};

export const TypeClassSlice = createSlice({
    name: 'typeClass',
    initialState,
    reducers: {
        // Các reducer đồng bộ nếu cần (nếu có)
    },
    extraReducers: (builder) => {
        builder.addCase(HandleTypeClassAction.fulfilled, (state, action: PayloadAction<number>) => {
            state.loading = false;
            state.typeFilters = action.payload;
        });
    },
});

export default TypeClassSlice.reducer;
