import React, {useEffect} from "react";
import {Button, Col, DatePicker, Form, Input, Row} from "antd";

const {RangePicker} = DatePicker;

export default function SignIn({setAuthorized}) {
    useEffect(() => setAuthorized(false))
    return (
        <div style={{width: '40%', margin: '0 auto'}}>
            <p className="pDivider" style={{marginBottom: 5}}>
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
                    <Button ghost type='primary' style={{
                        width: '60%',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        height: '100%'
                    }}>Войти</Button>
                </Form.Item>
            </Form>
        </div>
    )
}