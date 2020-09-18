import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemInput} from '@components/form/formItemInput/FormItemInput';
import "./stories.css";


export default {title: 'FormItemInput', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemInput = () =>
    <ConfiguredForm
        onFinish={onFinish}
        basicInputs={["without"]}
    >
        <FormItemInput
            name="without"
            label={text('label', 'example of question')}
            rules={[{required: true, message: "⚠ Please input your password!"}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
