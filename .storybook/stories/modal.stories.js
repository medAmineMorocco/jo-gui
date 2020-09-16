import React, {useState} from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import "./stories.css";
import {Button} from "antd";
import { InfoOutlined } from "@ant-design/icons";
import {Modal} from "@components/modal/Modal";


export default {title: 'Modal', decorators: [withKnobs]};

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
