import {createSlice} from '@reduxjs/toolkit'

const searchSlice=createSlice({
    name:"search",
    initialState:{
        cachedResult:{},
    },
    reducers:{
        addSearchQuery:(state,action)=>{
            const [key,value]=action.payload;
            state.cachedResult[key]=value;
        },
    }
})

export const {addSearchQuery}=searchSlice.actions;
export default searchSlice.reducer;

export const scrollToTop=()=>{
    window.scrollTo(0,0);       
}