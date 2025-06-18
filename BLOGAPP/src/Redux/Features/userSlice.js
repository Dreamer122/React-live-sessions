import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        userData:null,

    },
    reducers:{
        setUserData:(state,action)=>{
            state.userData=action.payload

        },
        setLoading:(state,action)=>{
            state.loading=action.payload

        }
    }
})
export const {setUserData,setLoading}=userSlice.actions
export default userSlice.reducer;