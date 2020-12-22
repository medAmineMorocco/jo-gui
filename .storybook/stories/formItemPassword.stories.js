import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form} from "antd";
import {ConfiguredForm} from "../ConfiguredForm";
import {FormItemPassword} from '@components/form/formItemPassword/FormItemPassword';
import "./stories.css";


export default {title: 'Data Entry/FormItemPassword', decorators: [withKnobs]};

export const formItemInput = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
    >
        <FormItemPassword
            name="password"
            label={text('label', 'password')}
            rules={[{required: true, message: "⚠ Please input your password!"}]}
        />
    </ConfiguredForm>;
}
