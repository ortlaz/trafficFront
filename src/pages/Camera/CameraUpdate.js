import React from "react";
import {Button, Col, DatePicker, Form, Row} from "antd";
import {Input} from "antd/es";

const {RangePicker} = DatePicker;

export default function CameraUpdate({setAuthorized, forEdit = false}) {
    // useEffect(() => setAuthorized(true));
    return (
        <div>
            <p className="pDivider" style={{marginBottom: 20}}>Информация о видеокамере</p>
            <Form layout='vertical' style={{width: '45%', margin: '0 auto'}}>
                {/*{forEdit && (*/}
                <Row align='center' gutter={12}>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label=" ">
                            <Input placeholder="Назание"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Input placeholder="Фокусное расстояние"/>
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Input placeholder="FPS"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row align="center">
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Button ghost type="primary" style={{width: "100%"}}>Сохранить</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}