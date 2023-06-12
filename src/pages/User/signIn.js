import React from "react";
import {Button, Col, Form, Input, message, Row} from "antd";
import {logIn} from "./requests";
import {useNavigate} from "react-router-dom";

export default function SignIn({setUser}) {
    const navigate = useNavigate();
    const handleSignIn = (data) => {
        logIn(data)
            .then(res => {
                setUser(res.data);
                navigate('/locations/list');
                window.location.reload();
            })
            .catch(error => message.error(error))
    };
    return (
        <div className='signIn'>
            <p className="pDivider" style={{marginBottom: 5, fontSize: '20px'}}>
                ВХОД
            </p>
            <Form layout='vertical' onFinish={handleSignIn}>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label=" " name="username">
                            <Input placeholder="Имя пользователя"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="" name="password">
                            <Input placeholder="Пароль"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type='primary' htmlType="submit">Войти</Button>
                </Form.Item>
            </Form>
        </div>
    )
}