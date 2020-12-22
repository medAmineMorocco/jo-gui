import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form} from "antd";
import {ConfiguredForm} from "../ConfiguredForm";
import {FormItemInput} from '@components/form/formItemInput/FormItemInput';
import "./stories.css";


export default {title: 'Data Entry/FormItemInput', decorators: [withKnobs]};

export const formItemInput = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}>
        <FormItemInput
            name="without"
            label={text('label', 'example of question')}
            rules={[{required: true, message: "⚠ Please input your password!"}]}
        />
    </ConfiguredForm>;
}
