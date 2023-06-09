import React, {useEffect} from "react";
import {Button, Col, Form, Input, Row} from "antd";

export default function SignIn({setAuthorized}) {
    useEffect(() => setAuthorized(false))
    return (
        <div  className='signIn'>
            <p className="pDivider" style={{marginBottom: 5, fontSize:'20px'}}>
                ВХОД
            </p>
            <Form layout='vertical'>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label=" ">
                            <Input placeholder="Email"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="">
                            <Input placeholder="Пароль"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button type='primary'>Войти</Button>
                </Form.Item>
            </Form>
        </div>
    )
}