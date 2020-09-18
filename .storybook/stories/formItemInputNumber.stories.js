import React from 'react';
import {text, withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemInputNumber} from '@components/form/formItemInputNumber/FormItemInputNumber';
import "./stories.css";


export default {title: 'FormItemInputNumber', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemInputNumber = () =>
    <ConfiguredForm
        onFinish={onFinish}
        basicInputs={["without"]}
    >
        <FormItemInputNumber
            name="without"
            tooltipTitle={text('infos', 'example of tooltip')}
            label={text('label', 'example of question')}
            rules={[{required: true, message: "⚠ Please input your number!"}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
