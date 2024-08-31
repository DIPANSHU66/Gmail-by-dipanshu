import { createSlice} from "@reduxjs/toolkit";
const   appSlice=createSlice({
    name: "appSlice",
    initialState: {
            open:false,
            emails:[],
            selectedEmail:null,
            searchtext:"",
            user:null
    },
    reducers: {
             setOpen:(state,action)=>{
              state.open=action.payload;},

              setEmail:(state,action)=>{
              state.emails=action.payload;
        },
                 setselectedEmail: (state,action)=>{
                state.selectedEmail=action.payload;
            },
              setsearchtext:(state,action)=>{
                state.searchtext=action.payload;
            },
            setuser: (state,action)=>{
              state.user=action.payload;
            }
    }
});

export const {setOpen,setEmail,setselectedEmail, setsearchtext,setuser} = appSlice.actions;
export default  appSlice.reducer;