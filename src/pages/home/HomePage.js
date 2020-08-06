import React, { Fragment, useState } from "react";
import { Button } from "antd";
import { ArrowRightOutlined, InfoOutlined } from "@ant-design/icons";
import { Modal } from "@components/modal/Modal";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";
import { StyledTitle } from "@components/title/StyledTitle";
import {
    HERO_TITLE1,
    HERO_TITLE2,
    HERO_DESCRIPTION,
    FOOTER_START_ACTION,
    ABOUT_TITLE,
    ABOUT_CONTENT
} from "@utils/constants";
import {useHistory} from "react-router-dom";
import "./homePage.css";

export function HomePage(props) {
    const [isVisible, setVisible] = useState(false);
    const history = useHistory();

    const onStart = () => {
        history.push('/intro');
    };

    return (
        <Fragment>
            <Header>
                <Button
                    className="show-overlay-btn"
                    type="primary"
                    shape="circle"
                    icon={<InfoOutlined />}
                    onClick={() => setVisible(true)}
                />
            </Header>
            <Modal
                title={ABOUT_TITLE}
                content={ABOUT_CONTENT}
                isVisible={isVisible}
                hideOverlay={() => setVisible(false)}
            />
            <div className="hero-container">
                <div className="hero-wrapper">
                    <StyledTitle style={{fontWeight: 'bolder', fontSize: '5vw', lineHeight: '4vw'}} title1={HERO_TITLE1} title2={HERO_TITLE2} />
                </div>
                <div className="hero-description">{HERO_DESCRIPTION}</div>
            </div>
            <div style={{ height: "400px" }}>lol</div>
            <Footer style={{display: 'flex', justifyContent: 'center'}}>
                <Button className="footer-action-start" type="primary" shape="round" onClick={onStart}>
                    {FOOTER_START_ACTION} <ArrowRightOutlined />
                </Button>
            </Footer>
        </Fragment>
    );
}
