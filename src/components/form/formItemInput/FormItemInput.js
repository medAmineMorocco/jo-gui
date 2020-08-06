import React, {useRef, useState} from 'react';
import {findDOMNode} from "react-dom";
import { Form, Tooltip, Input } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import { getColor } from "@utils/cssUtil";
import "./formItemInput.css";

export function FormItemInput({ label, name, rules, tooltipTitle, className }) {
    const mainColor = getColor('--main-color');
    const inputRef = useRef();
    const [color, setColor] = useState(mainColor);

    const onFocus = () => {
        const focusColor = "white";
        setColor(focusColor);
        changeColorElementTo(inputRef, focusColor);
    };

    const onBlur = () => {
        const blurColor = mainColor;
        setColor(blurColor);
        changeColorElementTo(inputRef, blurColor);
    };

    const changeColorElementTo = (ref, color) => {
        const element = findDOMNode(ref.current);
        element.style.borderColor = color;
        element.style.color = color;
    };

    return (
        <Form.Item
            className={className}
            label={
                <span
                    style={{ color }}>
          {label}
                    {tooltipTitle && (
                        <Tooltip className="tooltip-icon" title={tooltipTitle} color={mainColor} placement="topRight">
                            <QuestionCircleFilled />
                        </Tooltip>
                    )}
        </span>
            }
            name={name}
            rules={rules}
        >
            <Input
                ref={inputRef}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </Form.Item>
    );
}
