import React, {useEffect} from "react";
import {Avatar, Button} from "antd";
import {SettingOutlined, UserOutlined} from "@ant-design/icons"
import {logOut} from "./requests";

export default function User({setAuthorized, setUser}) {
    useEffect(() => setAuthorized(true), []);
    const logout = () => {
        logOut().then(()=>setUser(null));
    }
    return (
        <div>
            <p className="pDivider" style={{marginBottom: 20}}>КАРТА ПОЛЬЗОВАТЕЛЯ</p>
            <div><Avatar size={128} icon={<UserOutlined/>}></Avatar></div>
            <Button icon={<SettingOutlined/>} type="link">Редактировать</Button>
            <Button icon={<SettingOutlined/>} type="primary" onClick={logout}>Выход</Button>
        </div>
    )
}