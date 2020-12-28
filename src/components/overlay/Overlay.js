import React, { useState } from "react";
import { Modal, Button, Carousel } from "antd";
import {
  BulbOutlined,
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "./overlay.css";

export function Overlay(props) {
  const [visible, SetVisible] = useState({
    modalVisible: false,
    closeButton: "none",
  });
  const { modalVisible, closeButton } = visible;
  let { items, title } = props;

  const tiles = items.map((value) => (
    <div key={value}>
      {value.text && (
        <h3
          className="text-modal-overlay"
          dangerouslySetInnerHTML={{ __html: value.text }}
        />
      )}
      {value.image && (
        <img
          className="div-image-overlay"
          src={value.image}
          alt={value.alt}
          title={value.alt}
        />
      )}
    </div>
  ));

  return (
    <div className="container-flex-overlay">
      <Button
        className="custom-btn-modal"
        type="primary"
        onClick={() =>
          SetVisible({ modalVisible: true, closeButton: "inline-block" })
        }
      >
        <div className="container-text-button">
          <BulbOutlined className="icon-modal" />
          <span className="title-button">{title}</span>
        </div>
      </Button>
      <Button
        className="modal-close-btn-modal"
        type="primary"
        shape="circle"
        icon={<CloseOutlined aria-label="bouton de fermeture" />}
        onClick={() => SetVisible({ modalVisible: false, closeButton: "none" })}
        style={{ display: closeButton }}
      />
      <Modal
        visible={modalVisible}
        onOk={() => SetVisible({ modalVisible: false, closeButton: "none" })}
        onCancel={() =>
          SetVisible({ modalVisible: false, closeButton: "none" })
        }
        className="custom-modal"
        width={"100%"}
        footer={null}
        centered
        closable={false}
      >
        <Carousel
          draggable={true}
          arrows={true}
          prevArrow={<LeftOutlined aria-label="flèche précédente" />}
          nextArrow={<RightOutlined aria-label="flèche suivante" />}
        >
          {tiles}
        </Carousel>
      </Modal>
    </div>
  );
}
