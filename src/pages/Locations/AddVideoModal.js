import React, {useState} from "react";
import {Col, DatePicker, Form, message, Modal, Row} from "antd";
import Dragger from "antd/es/upload/Dragger";
import {InboxOutlined} from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/ru_RU";
import {createReport, getLocation} from "./requests";
import {useForm} from "antd/es/form/Form";

export default function AddVideoModal({visible, setVisible, idCard,
                                          setLocationData,
                                          setReports,
                                          setLocationCamera,
                                          setCurrStatus}) {
    const [form] = useForm();
    const [videoFile, setVideoFile] = useState();
    const handleSubmit = (data) => {
        let reportFormData = new FormData();
        reportFormData.append('video_file', videoFile);
        reportFormData.append('date', data.date);
        createReport(reportFormData).then(()=>getLocation(idCard)
            .then((res) => {
                setLocationData(res.data);
                setReports(res.data.location_report);
                setLocationCamera(res.data.location_camera.map(el => el.name));
                setCurrStatus(res.data.status.name)
            })
            .catch((err) => message.error(err))).catch((err)=>message.error(err))

    }
    const handleOk = (data) => {
        form.submit();
        setVisible(false)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const props = {
        name: 'file',
        multiple: false,
        onChange: (info) => {
            setVideoFile(info.file.originFileObj);
        }
    };
    return (
        <Modal
            title="Добавить видеозапись"
            open={visible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <Form layout='vertical' form={form} onFinish={handleSubmit}>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item name={'date'}>
                            <DatePicker
                                placeholder="Дата съемки"
                                style={{width: '100%'}}
                                locale={locale}
                            />
                        </Form.Item>
                    </Col>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined/>
                                </p>
                                <p className="ant-upload-text">
                                    Нажмите или переместите файл сюда
                                </p>
                            </Dragger>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>)
}