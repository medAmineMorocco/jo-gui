import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemPassword} from '@components/form/formItemPassword/FormItemPassword';
import "./stories.css";


export default {title: 'Data Entry/FormItemPassword', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemInput = () =>
    <ConfiguredForm
        onFinish={onFinish}
        basicInputs={["password"]}
    >
        <FormItemPassword
            name="password"
            label={text('label', 'password')}
            rules={[{required: true, message: "⚠ Please input your password!"}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
