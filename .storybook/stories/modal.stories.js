import React, {useState} from 'react';
import {Button} from "antd";
import { InfoOutlined } from "@ant-design/icons";
import {Modal} from "@components/modal/Modal";
import "./stories.css";


export default {title: 'Feedback/Modal'};

export const modal = () => {
    const [isVisible, setVisible] = useState(false);
    return (
        <div>
            <Button
                className="show-overlay-btn"
                type="primary"
                shape="circle"
                icon={<InfoOutlined/>}
                onClick={() => setVisible(true)}
            />
            <Modal
                title="title"
                content={["content"]}
                isVisible={isVisible}
                hideOverlay={() => setVisible(false)}
            />
        </div>
    );
};
