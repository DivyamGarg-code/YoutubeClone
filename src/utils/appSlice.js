import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        videoList:[],
        searchResultList:[],
        darkMode:false
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        addVideoList:(state,action)=>{
            state.videoList=action.payload;
        },
        addSearchResultList:(state,action)=>{
            state.searchResultList=action.payload;
        },
        toggleTheme:(state)=>{
            state.darkMode=!state.darkMode;
        }

        
    }
})

export const { toggleMenu,closeMenu,addVideoList ,addSearchResultList,toggleTheme} = appSlice.actions;
export default appSlice.reducer;