/** @format */

import {Layout, Switch} from 'antd';
import {BrowserRouter} from 'react-router-dom';
import React, {useState} from "react";
import Header from "./header";
import Main from "./main";

/** @format */

const {Footer, Content} = Layout;
export default function AppLayout() {
    const [authorized, setAuthorized] = useState(false);
    const [report, setReport] = useState(false);
    const handleChange = (val) => (
        setAuthorized(val)
    );
    return (
        <Layout style={{minHeight: '100.1vh'}}>
            <BrowserRouter>
                <Header authorized={authorized} report={report} />
                <Content style={{margin: '2% 10%'}}>
                    <Main
                        authorized={authorized}
                        setAuthorized={setAuthorized}
                        report={report}
                        setReport={setReport}/>
                    {/*{children}*/}
                </Content>
            </BrowserRouter>
            <Footer>
                <Switch size='small' onChange={handleChange}/>
            </Footer>
        </Layout>
    );
}
