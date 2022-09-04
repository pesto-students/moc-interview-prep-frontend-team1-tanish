import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import { getDataSignIn } from "../../api/api";
import {findStudent,findInterviewer} from "../../constant/apiUrl";

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password ,role }, thunkAPI) => {
    try {
      let foundUser = (role.value==="Student")?await  getDataSignIn(findStudent,{ params: {email: email.value}}):await  getDataSignIn(findInterviewer,{ params: {email: email.value}});
      console.log(foundUser);
      if (foundUser.status ==="OLD_USER"){
          if (foundUser.res.data.password === password.value){            
             thunkAPI.dispatch(setMessage("SignIn successful"));
             return { foundUser: foundUser,status:"SIGNIN_TRUE",role:role.value };
          }
        thunkAPI.dispatch(setMessage("Password doesnot match"));
        return { foundUser: foundUser,status:"SIGNIN_False"};
        
      }else{
        thunkAPI.dispatch(setMessage("Email is Not Registered With us"));
      }
      return { foundUser: foundUser };
    } catch (error) {
      console.log("inside catch");
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
const initialState = {
    isLoggedIn:false,
    user:null,
    role:null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      console.log("inside logout");
      state.isLoggedIn = false;
      state.user = null;
      state.role = null;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      console.log("inside fullfilled");
      console.log( action.payload.foundUser);
      console.log( action.payload.status);
      console.log(  action.payload.role);
      if (action.payload.status === "SIGNIN_TRUE" ){
        state.isLoggedIn = true;
        state.user = action.payload.foundUser.res.data;
        state.role = action.payload.role;
      }
      
    },
    [login.rejected]: (state, action) => {
      console.log("inside reject");
      state.isLoggedIn = false;
      state.user = null;
      state.role = null;
    },
  },
});

const { reducer } = authSlice;
export const { logout } = authSlice.actions;
export default reducer;


