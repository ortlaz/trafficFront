import React from "react";
import {Col, DatePicker, Form, message, Modal, Row} from "antd";
import Dragger from "antd/es/upload/Dragger";
import {InboxOutlined} from "@ant-design/icons";
import locale from "antd/es/date-picker/locale/ru_RU";

export default function AddVideoModal({visible, setVisible}) {
    const handleOk = () => {
        setVisible(false)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            const {status} = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };
    return (
        <Modal
            title="Добавить видеозапись"
            open={visible}
            onOk={handleOk}
            onCancel={handleCancel}>
            <Form layout='vertical'>
                <Row>
                    <Col xl={24} md={24} sm={24} xs={24}>
                        <Form.Item>
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