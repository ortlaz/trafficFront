import React from "react";
import {Button, Col, DatePicker, Form, Input, Row} from "antd";

const {RangePicker} = DatePicker;

export default function SignUp({setAuthorized}) {
    return (
        <div className='signIn'>
            <p className="pDivider" style={{marginBottom: 30,fontSize:'20px'}}>
                РЕГИСТРАЦИЯ
            </p>
            <Form layout='vertical'>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label="">
                            <Input placeholder='ФИО'/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Input placeholder="Email"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Input placeholder="Номер контракта"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Input placeholder="Пароль"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Input placeholder="Подтверждение пароля"/>
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