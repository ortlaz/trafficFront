import React from "react";
import {Button, Col, DatePicker, Form, Row, Select} from "antd";
import {Input} from "antd/es";
import FilesTable from "./FilesTable";

const {RangePicker} = DatePicker;

export default function LocationUpdate({setAuthorized, forEdit = false}) {
    // useEffect(() => setAuthorized(true));
    return (
        <div className="locationInfo">
            <p className="pDivider" style={{marginBottom: 0, fontSize: '20px'}}>Информация о локации</p>
            <Form layout='vertical' style={{width: '90%', margin: '0 auto'}}>
                {/*{forEdit && (*/}
                <Row align='center' gutter={12}>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label=" ">
                            <Input placeholder="Адрес"/>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item>
                            <Select className="custom-select"
                                    placeholder="Номер договора" options={[
                                {
                                    value: 'Д11',
                                    label: 'Д001:Арсений Сергеевич',
                                },
                                {
                                    value: 'Д11',
                                    label: 'Д002:Дмитрий Станиславоич',
                                },
                            ]}/>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item>
                            <Select className="custom-select"
                                    placeholder="Камера"
                                    options={[
                                        {
                                            value: 'K1',
                                            label: 'EZVIZ C2C (H.265)',
                                        },
                                        {
                                            value: 'K2',
                                            label: 'Falcon Eye FE-MHD-DP2e-20',
                                        },
                                    ]}/>
                        </Form.Item>
                    </Col>
                </Row>
                {/*<Row align='center' gutter={12}>*/}
                {/*    <Col xl={12} md={12} sm={24} xs={24}>*/}
                {/*        <Form.Item>*/}
                {/*            <DatePicker style={{*/}
                {/*                width: "100%",*/}
                {/*                borderRadius: '7px',*/}
                {/*                borderColor: 'black',*/}
                {/*                // boxShadow: '0 0 0 2px rgb(78 72 72 / 20%)'*/}
                {/*            }}*/}
                {/*                        placeholder="Дата начала работ"/>*/}
                {/*        </Form.Item>*/}
                {/*    </Col>*/}
                {/*    <Col xl={12} md={12} sm={24} xs={24}>*/}
                {/*        <Form.Item>*/}
                {/*            <DatePicker style={{*/}
                {/*                width: "100%",*/}
                {/*                borderRadius: '7px',*/}
                {/*                borderColor: 'black',*/}
                {/*                // boxShadow: '0 0 0 2px rgb(78 72 72 / 20%)'*/}
                {/*            }}*/}
                {/*                        placeholder="Дата окончания работ"/>*/}
                {/*        </Form.Item>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row align='center'>
                    <Form.Item style={{width: "100%"}}>
                        <FilesTable/>
                    </Form.Item>
                </Row>
                <Row align="center">
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Button ghost type="primary" style={{width: "100%"}}>Сохранить</Button>
                    </Col>
                </Row>
                {/*)}*/}
            </Form>

        </div>
    )
}