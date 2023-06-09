import React from "react";
import {Col, Row, Table, Typography} from "antd";
import ReportMenu from "./ReportMenu";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

export default function WeekReport() {
    const data = [
        {
            height: '120-130',
            startTime: 3,
            endTime: 3,
            sum: 6,
            percentage: `${6 / 16 * 100}`
        },
        {
            height: '130-140',
            startTime: 0,
            endTime: 0,
            sum: 0,
            percentage: 0
        },
        {
            height: '140-150',
            startTime: 0,
            endTime: 0,
            sum: 0,
            percentage: 0
        },
        {
            height: '150-155',
            startTime: 0,
            endTime: 0,
            sum: 0,
            percentage: 0
        },
        {
            height: '155-165',
            startTime: 0,
            endTime: 0,
            sum: 0,
            percentage: 0
        },
        {
            height: '> 165',
            startTime: 5,
            endTime: 5,
            sum: 10,
            percentage: `${10 / 16 * 100}`
        },
        {
            height: 'Итого',
            startTime: 8,
            endTime: 8,
            sum: 16,
            percentage: 100
        },
    ];

    const setRowClass = (record) => {
        if (record.height === 'Итого') {
            return {
                className: 'summarizeRow',
            };
        }
    };

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
                        Видеосъемка пешеходного трафика
                    </h2>
                </Typography.Title>
                <br/>
                <Row>
                    <Col xl={12} md={12} sm={12} xs={24}>
                        <Typography.Title
                            level={3}
                            style={{
                                margin: 0,
                            }}
                        >
                            <h3><a href="https://youtu.be/jhro5tuUlIg?t=499"
                                   className="link-secondary">
                                Боровское шоссе 2Ак3</a></h3>
                        </Typography.Title>
                    </Col>
                    <Col xl={12} md={12} sm={12} xs={24}>
                        <ReportMenu
                            coreFundingLink={'/week-report/height'}
                            additionalFundingLink={'/week-report/gender'}
                            allFundingLink={'/week-report/age'}
                        />
                    </Col>
                </Row>
                <br/>
                <Table dataSource={data} onRow={(record) => setRowClass(record)}>
                    <Column title="Рост, см" dataIndex="height" key="height"/>
                    <ColumnGroup title="Период подсчета">
                        <Column title="0:03-0:04" dataIndex="startTime" key="startTime"/>
                        <Column title="0:04-0:05" dataIndex="endTime" key="endTime"/>
                    </ColumnGroup>
                    <Column title="Общее за всё время" dataIndex="sum" key="sum"/>
                    <Column title="% от общего" dataIndex="percentage" key="percentage"/>
                </Table>
            </Col>
            <Col xs={1} sm={2}></Col>
        </Row>
    );
}