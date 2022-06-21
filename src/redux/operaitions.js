import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token){
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(){
    axios.defaults.headers.common.Authorization = '';
  }
}

export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
  async() => { const {data} =  await axios.get('/contacts')
  return data
  }   
) 

export const addContact = createAsyncThunk('phonebook/addContact', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
  return data;
  } catch (error) {
    alert(error.message)
  }
});

export const deleteContact =  createAsyncThunk('contacts/deleteContact',
async(contactId) => {
  await axios.delete(`/contacts/${contactId}`)
  return contactId
}
)

export const newUser = createAsyncThunk('auth/newUser', async user => {
  const { data } = await axios.post('/user/signup', user);
  token.set(data.token)
  return data;
});

export const loginUser = createAsyncThunk('auth/loginUser', async user => {
  const { data } = await axios.post('/user/login', user);
  token.set(data.token)
  return data;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  await axios.post('/user/logout');
  token.unset()
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
 const state = thunkAPI.getState();
 const token = state.auth.token;

 if(token === null){
  return thunkAPI.rejectWithValue();
 }
 token.set(token);
 try {
  const { data } = await axios.get('/user/current');
  return data;
 } catch (error) {
  console.error()
 }
  
});
  
