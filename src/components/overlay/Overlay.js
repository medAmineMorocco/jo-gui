import React, { useState } from "react";
import { Modal, Button, Carousel } from "antd";
import {
  BulbOutlined,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./overlay.css";

export function Overlay(props) {
  const [visible, SetVisible] = useState({
    modalVisible: false,
    closeButton: "none",
  });
  const { modalVisible, closeButton } = visible;
  let { items } = props;

  const titleModal = (
    <div className="container-flex-title-modal">
      <BulbOutlined className="icon-modal" />
      <p className="title-modal">Comment réduire sont empreinte ?</p>
    </div>
  );

  const tiles = items.map((value) => (
    <div key={value}>
      <h3 className="content-style">{value.text}</h3>
      <h4 className="content-style">
        <div
          className="div-image"
          style={{ backgroundImage: "url(" + value.image + ")" }}
        ></div>
        <div className="text-modal">{value.sousText}</div>
      </h4>
    </div>
  ));

  return (
    <>
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
            <span className="title-button">
              Comment réduire sont empreinte ?
            </span>
            <div></div>
          </div>
        </Button>
        <Button
          className="modal-close-btn-modal"
          type="primary"
          shape="circle"
          icon={<CloseOutlined />}
          onClick={() =>
            SetVisible({ modalVisible: false, closeButton: "none" })
          }
          style={{ display: closeButton }}
        />
        <Modal
          title={titleModal}
          visible={modalVisible}
          onOk={() => SetVisible({ modalVisible: false, closeButton: "none" })}
          onCancel={() =>
            SetVisible({ modalVisible: false, closeButton: "none" })
          }
          className="custom-modal"
          footer={null}
          centered
          closable={false}
        >
          <Carousel
            draggable={true}
            arrows={true}
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
          >
            {tiles}
          </Carousel>
        </Modal>
      </div>
    </>
  );
}
