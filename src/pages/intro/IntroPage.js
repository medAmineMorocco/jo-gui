import React, {Fragment, useState} from "react";
import {InfoOutlined} from "@ant-design/icons";
import {Header} from "@components/header/Header";
import {BoxSides} from "@components/box/BoxSides";
import {FooterWithNavigation} from "@components/footer/FooterWithNavigation";
import {StyledTitle} from "@components/title/StyledTitle";
import {Summary} from "@components/summary/Summary";
import { Modal } from "@components/modal/Modal";
import {useWindowSize} from "@hooks/window";
import {
    HERO_TITLE1,
    HERO_TITLE2,
    MENU_DESCRIPTION,
    ABOUT_TITLE,
    ABOUT_CONTENT,
    NAVIGATION_HOME,
    NAVIGATION_PROFESSIONAL
} from "@utils/constants";
import {Button as ButtonAntd} from "antd";
import "./introPage.css";

export function IntroPage() {
    const [isVisible, setVisible] = useState(false);
    const isMobile = useWindowSize();

    let content;

    if (isMobile) {
        content = (
            <Fragment>
                <StyledTitle title1={HERO_TITLE1} title2={HERO_TITLE2}/>
                <div
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <p
                        style={{
                            paddingLeft: "10vw",
                            paddingRight: "10vw",
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            textAlign: 'center'
                        }}
                    >
                        {MENU_DESCRIPTION}
                    </p>
                    <Summary/>
                </div>
            </Fragment>
        );
    } else {
        const left = <div className="left-side-menu"/>;
        const right = (
            <div className="right-side-menu">
                <StyledTitle title1={HERO_TITLE1} title2={HERO_TITLE2}/>
                <p className="intro-menu-description">{MENU_DESCRIPTION}</p>
                <div style={{marginLeft: "20%"}}>
                    <Summary/>
                </div>
            </div>
        );
        content = <BoxSides left={left} right={right} height="55vh"/>;
    }
    return (<Fragment>
        <Header>
            <ButtonAntd
                className="show-modal-btn"
                type="primary"
                shape="circle"
                icon={<InfoOutlined/>}
                onClick={() => setVisible(true)}
            />
        </Header>
        <Modal
            title={ABOUT_TITLE}
            content={ABOUT_CONTENT}
            isVisible={isVisible}
            hideOverlay={() => setVisible(false)}
        />
        {content}
        <FooterWithNavigation previous={NAVIGATION_HOME} next={NAVIGATION_PROFESSIONAL}/>
    </Fragment>)
}
