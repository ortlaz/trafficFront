import React, {useEffect} from "react";
import {Avatar, Button} from "antd";
import {UserOutlined, SettingOutlined} from "@ant-design/icons"

export default function User({setAuthorized}) {
    useEffect(() => setAuthorized(true));
    return (
        <div>
            <p className="pDivider" style={{marginBottom: 20}}>КАРТА ПОЛЬЗОВАТЕЛЯ</p>
            <div><Avatar size={128} icon={<UserOutlined/>}></Avatar></div>
            <Button icon={<SettingOutlined/>} type="link">Редактировать</Button>
        </div>
    )
}