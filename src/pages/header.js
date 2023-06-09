import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import logo from '../logo.png'
import {getUser} from "./User/requests";

export default function Header({report}) {
    const [user,setUser] = useState(null);
    useEffect(()=> {
        getUser().then((res) => {
            setUser(res.data);
        })
    }, []);
    return (
        <header>
            <nav>
                <Menu mode="horizontal" style={{justifyContent: 'start'}}>
                    <div>
                        <img alt="logo" src={logo}
                             style={{
                                 maxHeight: '25px',
                                 marginLeft: '110px'
                             }}/>
                    </div>
                    <Menu.Item key="home">
                        <Link to={'/'}/>Главная
                    </Menu.Item>
                    {user &&
                        <>
                            <Menu.Item key="user">
                                <Link to={'/user'}/>
                                Пользователь
                            </Menu.Item>
                            <Menu.Item key="registration">
                                <Link to={'/signup'}/>
                                Регистрация
                            </Menu.Item>
                            <Menu.Item key="locations">
                                <Link to={'/locations/list'}/>
                                Список локаций
                            </Menu.Item>
                            {report && <>
                                <Menu.Item key="weekReport">
                                    <Link to={'/week-report/height'}/>
                                    Общая статистика
                                </Menu.Item>
                                {/*<Menu.Item key="resultReport">*/}
                                {/*    <Link to={'/result-report'}/>*/}
                                {/*    Итоговые показатели*/}
                                {/*</Menu.Item>*/}
                            </>}
                        </>}
                </Menu>
            </nav>
        </header>
    )
}