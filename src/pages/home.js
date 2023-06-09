import React from "react";
import {Button, Col, Row} from "antd";
import peopleImg from '../walking_people.png';
import { useNavigate } from "react-router-dom";
export default function Home () {
    const history = useNavigate();
    return (
        <div>
            <Row>
                <Col span={12}>
                    <div className="mainHeader">
                        <h1>Система анализа пешеходного трафика торговых помещений</h1>
                    </div>
                    <Row className="mainButtons" gutter={16}>
                        <Col>
                            <Button type="primary" onClick={()=>history('/signin')}>Вход</Button>
                        </Col>
                        <Col>
                            <Button id="signUp">Оставить заявку</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>
                    <div className="mainImg">
                        <img alt="Пешеходы" src={peopleImg}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}