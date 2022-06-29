import AppBar from "../views/AppBar/AppBar";
import { Navigate, Route, Routes } from "react-router-dom";
import {  useEffect } from "react";
import Phonebook from "../views/Phonebook/Phonebook";
import HomePage from "../views/HomePage/HomePage";
import RegisterView from "../components/RegisterView/RegisterView";
import LoginView from "../components/LoginView/LoginView";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "redux/operaitions";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PublicRoute";


export default function App () {

const dispatch = useDispatch()

useEffect(()=>{ dispatch(fetchCurrentUser())},[dispatch])



  return <Routes>
            <Route path="/" element={ <AppBar/>}>
              <Route index element={<HomePage/>}/>
              <Route path="register" element={<PublicRoute restricted><RegisterView /></PublicRoute>} />
              <Route path="login" element={<PublicRoute redirectPath="/contacts" restricted><LoginView/></PublicRoute>}/>
              <Route path="contacts" element={<PrivateRoute redirectPath="/login"><Phonebook/></PrivateRoute>}/>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
           </Routes>
};


