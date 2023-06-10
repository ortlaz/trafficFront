import React, {useEffect, useState} from "react";
import {Button, Col, DatePicker, Form, message, Row, Select} from "antd";
import {Input} from "antd/es";
import FilesTable from "./FilesTable";
import {getCameraSelectList, getContractList, getLocation} from "./requests";
import {useParams} from "react-router-dom";
import {useForm} from "antd/es/form/Form";

const {RangePicker} = DatePicker;

export default function LocationUpdate({setAuthorized, forEdit = false}) {
    const {id} = useParams();
    const [form] = useForm();
    const [contracts, setContracts] = useState([]);
    const [cameras, setCameras] = useState([]);
    useEffect(() => {
        getLocation(id)
            .then((res) => form.setFieldsValue(res.data))
            .catch((err) => message.error(err))
    }, [])
    useEffect(() => {
        getContractList()
            .then((res) => setContracts(res.data))
            .catch((err) => message.error(err));
        getCameraSelectList()
            .then((res) => setCameras(res.data))
            .catch((err) => message.error(err))
    }, [])
    return (
        <div className="locationInfo">
            <p className="pDivider" style={{marginBottom: 0, fontSize: '20px'}}>Информация о локации</p>
            <Form layout='vertical' style={{width: '90%', margin: '0 auto'}} form={form}>
                {/*{forEdit && (*/}
                <Row align='center' gutter={12}>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label=" " name="address">
                            <Input placeholder="Адрес"/>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item name="user">
                            <Select
                                className="custom-select"
                                placeholder="Номер договора"
                            >
                                {contracts &&
                                    contracts.map((el) =>
                                        <Select.Option key={el.id} value={el.id}>
                                            {el.contract_number}:{el.first_name}
                                        </Select.Option>
                                    )}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item>
                            <Select
                                mode="multiple"
                                className="custom-select"
                                placeholder="Камера"
                                allowClear
                            >
                                {cameras &&
                                    cameras.map((el) =>
                                        <Select.Option key={el.id}>
                                            {el.name}
                                        </Select.Option>
                                    )}
                            </Select>
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