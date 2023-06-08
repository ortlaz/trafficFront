import {Button, Dropdown, Menu, Table} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import {UnorderedListOutlined} from "@ant-design/icons";

export default function FilesTable({}) {
    const dataSource = [
        {dates: '19.05.23-20.05.23', video: 'Video354', status: 'Загружено'},
        {dates: '21.05.23-21.05.23', video: 'Video234', status: 'Загружено'}
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
            title: 'Даты проведения работ',
            dataIndex: 'dates',
            key: 'dates',
        },
        {
            title: 'Видеозапись',
            // dataIndex: 'video',
            key: 'video',
            render: (record) =>
                <a href="./FilesTable#">{record.video}</a>

        },
        {
            title: <Button type="primary" style={{
                borderRadius: '7px'}}>Добавить</Button>,
            // dataIndex: 'status',
            key: 'status',
            render: (record) =>
                <div>{record.status}</div>
        },
        // {
        //     title: 'Действия',
        //     key: 'actions',
        //     render: renderActions
        // }
    ];

    return <Table columns={columns} dataSource={dataSource} scroll={{x: 101}}/>;
}

