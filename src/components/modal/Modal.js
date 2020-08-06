import React from "react";
import { Modal as ModalAntd, Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useWindowSize } from "@hooks/window";
import "./modal.css";

export function Modal({ title, content, isVisible, hideOverlay }) {
    const isMobile = useWindowSize();

    const closeButton = (
        <Button className="modal-close-btn" type="primary" shape="circle" icon={<CloseOutlined />} />
    );
    if (isMobile) {
        return (
            <ModalAntd
                title={title}
                visible={isVisible}
                onCancel={hideOverlay}
                footer={null}
                closeIcon={closeButton}
                width="100%"
                style={{ top: "0", height: "100%" }}
                bodyStyle={{ color: "white", textAlign: "center" }}
            >
                <p>{content}</p>
            </ModalAntd>
        );
    }
    return (
        <Drawer
            title={title}
            placement="right"
            onClose={hideOverlay}
            visible={isVisible}
            closeIcon={closeButton}
        >
            <p>{content}</p>
        </Drawer>
    );
}
