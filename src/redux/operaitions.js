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

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async() => { 
  try {
    const {data} =  await axios.get('/contacts')
    return data
  } catch (error) {
    alert(error.message)
  }  
}) 

export const addContact = createAsyncThunk('phonebook/addContact', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
  return data;
  } catch (error) {
    alert(error.message)
  }
});

export const deleteContact =  createAsyncThunk('contacts/deleteContact', async(contactId) => {
  try {
    await axios.delete(`/contacts/${contactId}`)
    return contactId
  } catch (error) {
    alert(error.message)
  }
})

export const newUser = createAsyncThunk('auth/newUser', async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token)
    return data;
  } catch (error) {
    alert(error.message)
  }
});

export const loginUser = createAsyncThunk('auth/loginUser', async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    token.set(data.token)
    return data;
  } catch (error) {
    alert(error.message)
  }
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  try {
    await axios.post('/users/logout');
    token.unset()
  } catch (error) {
    console.log(error.message)
  }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
 const state = thunkAPI.getState();
 const token = state.auth.token;

 if(token === null){
  return thunkAPI.rejectWithValue();
 }
 token.set(token);
 try {
  const { data } = await axios.get('/users/current');
  return data;
 } catch (error) {
  alert(error.message)
 }
  
});
  
