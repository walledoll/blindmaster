import { createSlice } from "@reduxjs/toolkit";

interface TypingState{
    text: string;
    userInput: string[];
    currentIndex: number;
    errors: boolean[];
}   

const initialState: TypingState = {
    text: '',
    userInput: [],
    currentIndex: 0,
    errors: []
}

const typingSlice = createSlice({
    name: 'typing',
    initialState,
    reducers: {
        setText: (state, action: {payload: string}) => {
            state.text = action.payload;
            state.userInput = [];
            state.currentIndex = 0;
            state.errors = [];
        },
        inputChar: (state, action: {payload: string}) => {
            const char = action.payload;
            const expectedChar = state.text[state.currentIndex];

            state.userInput[state.currentIndex] = char;
            const isCorrect = char === expectedChar;
            state.errors[state.currentIndex] = !isCorrect;
            state.currentIndex += 1;
        },
        resetTyping: (state) => {
            state.userInput = [];
            state.currentIndex = 0;
            state.errors= [];
        },
        deleteChar: (state) => {
            if(state.currentIndex > 0)
                state.currentIndex -= 1;
                state.userInput.length = state.currentIndex;
                state.errors.length = state.currentIndex;
        }
    }
});

export const { setText, inputChar, resetTyping, deleteChar} = typingSlice.actions;
export default typingSlice.reducer;