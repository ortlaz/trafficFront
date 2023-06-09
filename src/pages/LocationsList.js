import React from "react";
import {Button, Col, Row, Table, Tag, Typography} from "antd";
import {EditOutlined, FileSearchOutlined} from "@ant-design/icons";
import {StatusColors} from "./utils";
import {useNavigate} from "react-router-dom";

export default function LocationsList({setReport, setAuthorized}){
    const navigate = useNavigate();
    const data = [
        {
        status: 'Требуется загрузка видео',
        address: 'Боровское шоссе, 2Ак3',
        contract_number: 'Д0003'

    },
        {
        status: 'Подтверждена',
        address: 'Боровское шоссе, 2Ак3',
        contract_number: 'Д0003'
    },
    ]
    const columns = [
        {
            title: 'Статус',
            dataIndex: 'status',
            key: 'status',
            align:'center',
            render: (el)=>
                <Tag color={StatusColors[el]} key={el} style={{fontSize: '14px'}}>
                {el}
            </Tag>
        },
        {
            title: 'Адрес',
            dataIndex: 'address',
            key: 'address',
            align:'center',
        },
        {
            title: 'Номер договора',
            dataIndex: 'contract_number',
            key: 'contract_number',
            align:'center',
        },
        {
            title: 'Действия',
            key: 'actions',
            align:'center',
            render: ()=>(
                <div className='menuButtons'>
                <Button size="large" type="link" onClick={()=>navigate('/location-create')}><EditOutlined/></Button>
                <Button size="large" type="link"  onClick={()=>navigate('/week-report/height')}><FileSearchOutlined /></Button>
            </div>
            )
        },
    ]

    return(
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
                <Table
                    className="locations"
                    showHeader={false}
                    columns={columns}
                    dataSource={data}
                />
            </Col>
            <Col xs={1} sm={2}></Col>
        </Row>
    );
}