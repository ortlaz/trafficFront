import {Route, Routes} from "react-router-dom";
import Home from "./home";
import React from "react";
import User from "./user";
import SignUp from "./signUp";
import SignIn from "./signIn";
import LocationUpdate from "./LocationUpdate";
import CameraUpdate from "./CameraUpdate";
import WeekReport from "./WeekReport";
import LocationsList from "./LocationsList";

export default function Main({authorized, setAuthorized, report, setReport}) {
    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Home authorized={authorized}/>}/>
                <Route exact path='/user' element={<User setAuthorized={setAuthorized}/>}/>
                <Route path='/signup' element={<SignUp setAuthorized={true}/>}/>
                <Route path='/signin' element={<SignIn setAuthorized={setAuthorized}/>}/>
                <Route path='/locations/list' element={<LocationsList setAuthorized={true}/>}/>
                <Route path='/location-create' element={<LocationUpdate setReport={false} setAuthorized={true}/>}/>
                <Route path='/camera-create' element={<CameraUpdate setAuthorized={true}/>}/>
                <Route path='/week-report/height' element={<WeekReport setAuthorized={true} setReport={true} report={report}/>}/>
            </Routes>
        </main>
    )
}