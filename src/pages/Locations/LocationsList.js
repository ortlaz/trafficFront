import React, {useEffect, useState} from "react";
import {Button, Col, message, Row, Table, Tag, Typography} from "antd";
import {EditOutlined, FileSearchOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {getList} from "./requests";
import {StatusColors} from "../utils";

export default function LocationsList({setReport}) {
    const [listData, setListData] = useState([]);
    useEffect(()=>setReport(false), [])
    useEffect(
        () => {
            getList()
                .then((res) =>
                    setListData(res.data))
                .catch(error => message.error(error))
        },
        []);

    const navigate = useNavigate();
    const columns = [
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render: ({name}) =>
                <Tag color={StatusColors[name]} key={name} style={{fontSize: '14px'}}>
                    {name}
                </Tag>
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
            align: 'center',
        },
        {
            title: 'Номер договора',
            dataIndex: 'contract_number',
            key: 'contract_number',
            align: 'center',
        },
        {
            title: 'Действия',
            key: 'actions',
            align: 'center',
            render: (el) => (
                <div className='menuButtons'>
                    <Button size="large" type="link"
                            onClick={() => navigate(`/location/${el.id}`)}><EditOutlined/></Button>
                    <Button size="large" type="link"
                            onClick={() => navigate('/week-report/height')} disabled={el.status.name!=='Подтверждена'}><FileSearchOutlined/></Button>
                </div>
            )
        },
    ]

    return (
        <Row>
            <Col xs={1} sm={2}></Col>
            <Col xs={22} sm={20}>
                <Typography.Title
                    level={2}
                    style={{
                        margin: 0,
                    }}
                >
                    <h2 className="border-bottom">
                        Список локаций
                    </h2>
                </Typography.Title>
                <br/>
                <Row justify='end'>
                    <Col span={4}>
                        <Button ghost type='primary'>Создать</Button>
                    </Col>
                </Row>
                <br/>
                <Table
                    className="locations"
                    showHeader={false}
                    columns={columns}
                    dataSource={listData}
                />
            </Col>
            <Col xs={1} sm={2}></Col>
        </Row>
    );
}