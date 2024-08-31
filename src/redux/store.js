import  {configureStore}  from "@reduxjs/toolkit";

import appreducer from "./appSlice";

const   store=configureStore({
    reducer:{
        appSlice:appreducer,}
})
export default store;