import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {FormItemInput} from '@components/form/formItemInput/FormItemInput';
import { getColor } from "@utils/cssUtil";
import "./stories.css";


export default {title: 'FormItemInput', decorators: [withKnobs]};

const onFinishFailed = ({_, errorFields}) => {
    const errorColor = getColor('--error-color');
    const errorColorShade2 = getColor('--error-color-shade-2');
    errorFields.forEach(errors =>
        errors.name.forEach(error => {
            const inputContainer = document.getElementById(error);
            inputContainer.style.backgroundColor = 'black';
            inputContainer.style.borderColor = errorColor;
            inputContainer.style.color = errorColor;
            document.querySelector(
                `[for="${error}"]`
            ).firstElementChild.style.color = errorColorShade2;
        })
    );
};

export const formItemInput = () =>
    <Form
        layout="vertical"
        validateTrigger="onSubmit"
        labelCol={{span: 24}}
        wrapperCol={{span: 24}}
        onFinishFailed={onFinishFailed}
    >
        <FormItemInput
            name="without"
            tooltipTitle="this is a tooltip"
            label="Label with toolitp"
            rules={[{required: true, message: "⚠ Please input your password!"}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </Form>;
