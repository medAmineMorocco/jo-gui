import React, { Fragment, useState } from "react";
import { Button } from "antd";
import { ArrowRightOutlined, InfoOutlined } from "@ant-design/icons";
import { Modal } from "@components/modal/Modal";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";
import { StyledTitle } from "@components/title/StyledTitle";
import { Section } from "@components/section/Section";
import {
    HERO_TITLE1,
    HERO_TITLE2,
    HERO_DESCRIPTION,
    FOOTER_START_ACTION,
    ABOUT_TITLE,
    ABOUT_CONTENT,
    MAIN_DESC1,
    MAIN_DESC2,
    MAIN_DESC3,
    SECTION1_TITLE,
    SECTION1_PARAG1,
    SECTION1_PARAG2,
    SECTION1_PARAG3,
    SECTION1_PARAG4,
    SECTION1_PARAG5,
    SECTION2_TITLE,
    SECTION2_PARAG1,
    SECTION2_PARAG2,
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
            <div className="main-description">
                <p>{MAIN_DESC1}</p>
                <p>{MAIN_DESC2}</p>
                <p>{MAIN_DESC3}</p>
            </div>

            <Section title={SECTION1_TITLE} paragraphs={[SECTION1_PARAG1, SECTION1_PARAG2, SECTION1_PARAG3, SECTION1_PARAG4, SECTION1_PARAG5]} style={{background: '#009494'}} imgStyle={{ backgroundImage: 'url("/images/section_1.png")'}}></Section>
            <Section title={SECTION2_TITLE} paragraphs={[SECTION2_PARAG1, SECTION2_PARAG2]} style={{background: '#FF8675'}} imgStyle={{ backgroundImage: 'url("/images/section_2.png")'}} imgPosition='left'></Section>

            <Footer style={{display: 'flex', justifyContent: 'center'}}>'
                <Button className="footer-action-start" type="primary" shape="round" onClick={onStart}>
                    {FOOTER_START_ACTION} <ArrowRightOutlined />
                </Button>
            </Footer>
        </Fragment>
    );
}
