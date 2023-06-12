import {Button, Dropdown, Menu, Table, Tag} from "antd";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {UnorderedListOutlined} from "@ant-design/icons";
import AddVideoModal from "./AddVideoModal";
import {StatusColors} from "../utils";
import moment from "moment";

export default function FilesTable({data, idCard,  setLocationData,setReports,setLocationCamera,setCurrStatus}) {
    const [visible, setVisible] = useState(false);
    const renderActions = () => {
        return (
            <Dropdown
                overlay={
                    <Menu>
                        <Menu.Item key="1">
                            <Link
                                className="linkIcon"
                                to={'/author-card'}
                                target={'_blank'}
                            >
                                Просмотреть
                            </Link>
                        </Menu.Item>
                    </Menu>
                }
            >
                <Button
                    type="primary"
                    ghost
                    shape="circle"
                    icon={<UnorderedListOutlined/>}
                />
            </Dropdown>
        );
    };
    const columns = [
        {
            title: 'Дата проведения работ',
            dataIndex: 'date',
            key: 'date',
            render: (record) => moment(record).format('MMMM Do YYYY, h:mm:ss')
        },
        {
            title: 'Видеозапись',
            // dataIndex: 'video',
            key: 'video',
            render: (record) =>
                <a href={record.video_path}>Видео</a>

        },
        {
            title: <Button
                type="primary"
                style={{
                    borderRadius: '7px',
                    borderColor: 'white'
                }}
                onClick={() => setVisible(true)}
            >Добавить</Button>,
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render: ({name}) =>
                <Tag color={StatusColors[name]} key={name} style={{fontSize: '14px'}}>
                    {name}
                </Tag>
        },
    ];

    return <>
        <Table columns={columns} dataSource={data} scroll={{x: 101}}/>
        <AddVideoModal visible={visible} setVisible={setVisible}
                       idCard={idCard}
                       setLocationData={setLocationData}
                       setReports={setReports}
                       setLocationCamera={setLocationCamera}
                       setCurrStatus={setCurrStatus}
        />
    </>;
}

