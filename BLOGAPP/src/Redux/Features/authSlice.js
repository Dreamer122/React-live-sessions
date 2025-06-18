import {createSlice} from "@reduxjs/toolkit"

const authSlice=createSlice({
    name:"auth",
    initialState:{
        loading:false,
        userSession:localStorage.getItem("user")?
                JSON.parse(localStorage.getItem("user")):null,

    },
    reducers:{
        setUserSession:(state,action)=>{
            state.userSession=action.payload
        },
        logout:(state,action)=>{
            state.userSession=null
            localStorage.removeItem("user")

        },
        setLoading:(state,action)=>{
            state.loading=action.payload
        }



    }
})
export const {setUserSession,logout,setLoading}=authSlice.actions
export default authSlice.reducer