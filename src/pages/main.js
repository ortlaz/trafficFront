import {Route, Routes} from "react-router-dom";
import Home from "./home";
import React from "react";
import User from "./User/user";
import SignUp from "./User/signUp";
import SignIn from "./User/signIn";
import LocationUpdate from "./Locations/LocationUpdate";
import CameraUpdate from "./Camera/CameraUpdate";
import WeekReport from "./Report/WeekReport";
import LocationsList from "./Locations/LocationsList";

export default function Main({authorized, setAuthorized, report, setReport, user, setUser}) {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/user' element={<User setAuthorized={setAuthorized} setUser={setUser}/>}/>
                <Route path='/signup' element={<SignUp setAuthorized={true}/>}/>
                <Route path='/signin' element={<SignIn setUser={setUser}/>}/>
                <Route path='/locations/list' element={<LocationsList setReport={setReport}/>}/>
                <Route path='/location/:id' element={<LocationUpdate setReport={false} setAuthorized={true}/>}/>
                <Route path='/camera-create' element={<CameraUpdate setAuthorized={true}/>}/>
                <Route path='/week-report/height' element={<WeekReport setAuthorized={true} setReport={setReport} report={report}/>}/>
            </Routes>
        </main>
    )
}