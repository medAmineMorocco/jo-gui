import React from "react";
import { Modal as ModalAntd, Button, Drawer } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useTabletOrMobileSize } from "@hooks/window";
import "./modal.css";

export function Modal({ title, content, isVisible, hideOverlay }) {
  const isMobileOrTablet = useTabletOrMobileSize();

  const closeButton = (
    <Button
      className="modal-close-btn"
      type="primary"
      shape="circle"
      icon={<CloseOutlined aria-label="bouton de fermeture" />}
    />
  );

  const paragraphs = [];
  content.forEach((element, index) => {
    paragraphs.push(<p key={"modal-parag-" + index}>{element}</p>);
  });
  if (isMobileOrTablet) {
    return (
      <ModalAntd
        title={title}
        visible={isVisible}
        onCancel={hideOverlay}
        footer={null}
        closeIcon={closeButton}
        width="100%"
        style={{ top: "0", height: "100%" }}
        bodyStyle={{ color: "white", textAlign: "left" }}
      >
        <p>{paragraphs}</p>
      </ModalAntd>
    );
  }
  return (
    <Drawer
      title={title}
      placement="right"
      getContainer={false}
      onClose={hideOverlay}
      visible={isVisible}
      closeIcon={closeButton}
    >
      <p>{paragraphs}</p>
    </Drawer>
  );
}
