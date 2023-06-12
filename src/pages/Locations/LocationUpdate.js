import React, {useEffect, useState} from "react";
import {Button, Col, DatePicker, Form, message, Row, Select} from "antd";
import {Input} from "antd/es";
import FilesTable from "./FilesTable";
import {getCameraSelectList, getContractList, getLocation, updateLocation} from "./requests";
import {useParams} from "react-router-dom";
import {useForm} from "antd/es/form/Form";

const {RangePicker} = DatePicker;

export default function LocationUpdate({setAuthorized, forEdit = false}) {
    const {id} = useParams();
    const [form] = useForm();
    const [contracts, setContracts] = useState([]);
    const [cameras, setCameras] = useState([]);
    const [locationData, setLocationData] = useState({});
    const [reports, setReports] = useState([]);
    const [locationCamera, setLocationCamera] = useState([]);
    const [currStatus, setCurrStatus] = useState();
    useEffect(() => {
        getLocation(id)
            .then((res) => {
                setLocationData(res.data);
                setReports(res.data.location_report);
                setLocationCamera(res.data.location_camera.map(el => el.name));
                setCurrStatus(res.data.status.name)
            })
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

    useEffect(() => {
        form.setFieldsValue(locationData);
        // form.setFieldValue('location_camera',['EZVIZ C2C (H.265)'])
        form.setFieldValue('location_camera', locationCamera)
    }, [locationData])

    const handleUpdateLocation = (data) => {
        updateLocation(id, data).then(()=> {
            getLocation(id)
                .then((res) => {
                    setLocationData(res.data);
                    setReports(res.data.location_report);
                    setLocationCamera(res.data.location_camera.map(el => el.name));
                    setCurrStatus(res.data.status.name);
                    message.info('Обработка видео началась');
                })
                .catch((err) => message.error(err))
        })
    }

    return (
        <div className="locationInfo">
            <p className="pDivider" style={{marginBottom: 0, fontSize: '20px'}}>Информация о локации</p>
            <Form layout='vertical' style={{width: '90%', margin: '0 auto'}} form={form}
                  onFinish={handleUpdateLocation}>
                {/*{forEdit && (*/}
                <Row align='center' gutter={12}>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item label=" " name="address">
                            <Input placeholder="Адрес"/>
                        </Form.Item>
                    </Col>
                    <Col xl={12} md={12} sm={24} xs={24}>
                        <Form.Item name={["user", "id"]}>
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
                        <Form.Item name={["location_camera"]}>
                            <Select
                                mode="multiple"
                                className="custom-select"
                                placeholder="Камера"
                                allowClear
                            >
                                {cameras &&
                                    cameras.map((el) =>
                                        <Select.Option key={el.id} value={el.name}>
                                            {el.name}
                                        </Select.Option>
                                    )}
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row align='center'>
                    <Form.Item style={{width: "100%"}}>
                        <FilesTable data={reports} idCard={id} setLocationData={setLocationData}
                                    setReports={setReports}
                                    setLocationCamera={setLocationCamera}
                                    setCurrStatus={setCurrStatus}/>
                    </Form.Item>
                </Row>
                {currStatus !== 'Подтверждена' &&
                    <Row align="space-between">
                        <Col xl={11} md={12} sm={24} xs={24}>
                            <Button htmlType='submit' ghost type="primary" style={{width: "100%"}}>Сохранить</Button>
                        </Col>
                        <Col xl={11} md={12} sm={24} xs={24}>
                            <Button htmlType='submit' ghost type="primary" style={{width: "100%"}}>Подтвердить</Button>
                        </Col>
                    </Row>}
                {/*)}*/}
            </Form>

        </div>
    )
}