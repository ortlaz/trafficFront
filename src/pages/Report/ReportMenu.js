/** @format */

import {Link, useLocation} from 'react-router-dom';
import {Col, Menu, Row} from 'antd';
import React from 'react';

export default function ReportMenu({
coreFundingLink,
additionalFundingLink,
allFundingLink,
}) {
    let location = useLocation();

    return (
        <Menu
            className="menuTabs"
            selectedKeys={[location.pathname]}
            mode="horizontal"
            style={{
                justifyContent: 'right',
                backgroundColor: '#f0f2f5',
                fontSize: '20px',
            }}
        >
            <Menu.Item key={coreFundingLink}>
                <Link to={coreFundingLink}/>
                Рост
            </Menu.Item>
            <Menu.Item key={additionalFundingLink}>
                <Link to={additionalFundingLink}/>
                Пол
            </Menu.Item>
            <Menu.Item key={allFundingLink}>
                <Link to={allFundingLink}/>
                Возраст
            </Menu.Item>
        </Menu>
    );
}
