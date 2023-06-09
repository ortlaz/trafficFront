import React, {useEffect} from "react";
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";

const {RangePicker} = DatePicker;

export default function SignUp({setAuthorized}) {
    useEffect(() => setAuthorized(false))
    return (
        <div className='signIn'>
            <p className="pDivider" style={{marginBottom: 30,fontSize:'20px'}}>
                РЕГИСТРАЦИЯ
            </p>
            <Form layout='vertical'>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="ФИО">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Email">
                            <Input/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="Номер контракта">
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
                    <Button type='primary' style={{width: '100%'}}>Зарегистрироваться</Button>
                </Form.Item>
            </Form>
        </div>
    )
}