import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./home";
import React from "react";
import User from "./user";
import SignUp from "./signUp";
import SignIn from "./signIn";
import LocationUpdate from "./LocationUpdate";
import CameraUpdate from "./CameraUpdate";
import WeekReport from "./WeekReport";

export default function Main({authorized, setAuthorized}) {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/user' element={<User setAuthorized={setAuthorized}/>}/>
                <Route path='/signup' element={<SignUp setAuthorized={setAuthorized}/>}/>
                <Route path='/signin' element={<SignIn setAuthorized={setAuthorized}/>}/>
                <Route path='/location-create' element={<LocationUpdate setAuthorized={true}/>}/>
                <Route path='/location-create' element={<LocationUpdate setAuthorized={true}/>}/>
                <Route path='/camera-create' element={<CameraUpdate setAuthorized={true}/>}/>
                <Route path='/week-report/height' element={<WeekReport/>}/>
            </Routes>
        </main>
    )
}