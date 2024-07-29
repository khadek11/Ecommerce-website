import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./userService";
import { toast} from 'react-toastify'



export const getuserProductwishlist = createAsyncThunk("user/wishlist", async(thunkAPI) => {
  try{
    return await authService.getUserWishlist();

  }catch(error){
    return thunkAPI.rejectWithValue(error);
  }
}) 
export const registerUser= createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUser= createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const getcustomerfromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
  
  const initialState = {
    user: getcustomerfromLocalStorage,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.createdUser = action.payload;
        state.message = "success";
        if(state.isSuccess=== true){
          toast.info("user created successfully")
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if(state.isError=== true){
          toast.info("user was not created")
        }
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "success";
        
        if(state.isSuccess=== true){
          localStorage.setItem("token", action.payload.token)
          toast.info("user logged in successfully")
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
        if(state.isError=== true){
          toast.info("user failed to login ")
        }
      })
      .addCase(getuserProductwishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getuserProductwishlist.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
        state.message = "success";
        
      })
      .addCase(getuserProductwishlist.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
       
      })
      
  },
});

export default authSlice.reducer;
