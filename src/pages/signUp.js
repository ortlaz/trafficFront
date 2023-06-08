import React, {useEffect} from "react";
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";

const {RangePicker} = DatePicker;

export default function SignUp({setAuthorized}) {
    useEffect(() => setAuthorized(false))
    return (
        <div style={{width: '50%', margin: '0 auto'}}>
            <p className="pDivider" style={{marginBottom: 5}}>
                РЕГИСТРАЦИЯ
            </p>
            <Form layout='vertical'>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Имя пользователя">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Email">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Пароль">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Подтверждение пароля">
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                    <Button ghost type='primary' style={{width: '100%'}}>Зарегистрироваться</Button>
                </Form.Item>
            </Form>
        </div>
    )
}