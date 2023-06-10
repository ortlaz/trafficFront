import {Button, Dropdown, Menu, Table, Tag} from "antd";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {UnorderedListOutlined} from "@ant-design/icons";
import AddVideoModal from "./AddVideoModal";
import {StatusColors} from "../utils";

export default function FilesTable({}) {
    const [visible, setVisible] = useState(false);
    const dataSource = [
        {date: '19.05.23-20.05.23', video: 'Video354', status: {name: 'Загружено'}},
        {date: '21.05.23-21.05.23', video: 'Video234', status: {name: 'Загружено'}}
    ];
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
        },
        {
            title: 'Видеозапись',
            // dataIndex: 'video',
            key: 'video',
            render: (record) =>
                <a href="./FilesTable.js#">{record.video}</a>

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
        // {
        //     title: 'Действия',
        //     key: 'actions',
        //     render: renderActions
        // }
    ];

    return <>
        <Table columns={columns} dataSource={dataSource} scroll={{x: 101}}/>
        <AddVideoModal visible={visible} setVisible={setVisible}/>
    </>;
}

