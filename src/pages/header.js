import {Link} from "react-router-dom";
import React from "react";
import {Menu} from "antd";
import logo from '../logo.png'

export default function Header({authorized}) {
    return (
        <header>
            <nav>
                <Menu mode="horizontal" style={{justifyContent: 'start'}}>
                    <div>
                        <img alt="logo" src={logo}
                             style={{
                                 maxHeight: '35px',
                                 paddingTop: '10%',
                                 marginLeft: '110px'
                             }}/>
                    </div>
                    <Menu.Item key="home">
                        <Link to={'/'}/>Главная
                    </Menu.Item>
                    {authorized &&
                        <>
                            <Menu.Item key="user">
                                <Link to={'/user'}/>
                                Пользователь
                            </Menu.Item>
                            <Menu.Item key="registration">
                                <Link to={'/signup'}/>
                                Регистрация
                            </Menu.Item>
                            <Menu.SubMenu title="Книги" key="catalog">
                                <Menu.Item key="books">
                                    <Link to={'/books'}/>
                                    Каталог
                                </Menu.Item>
                                <Menu.Item key="search">
                                    <Link to={'/search'}/>
                                    Расширенный поиск
                                </Menu.Item>
                                <Menu.Item key="authors">
                                    <Link to={'/authors'}/>
                                    Список авторов
                                </Menu.Item>
                            </Menu.SubMenu>
                            <Menu.Item key="booked">
                                <Link to={'/booked'}/>
                                Брони
                            </Menu.Item>
                        </>}
                </Menu>
            </nav>
        </header>
    )
}