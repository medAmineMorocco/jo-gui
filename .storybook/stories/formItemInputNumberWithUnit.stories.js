import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemInputNumberWithUnit} from '@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit';
import "./stories.css";


export default {title: 'FormItemInputNumberWithUnit', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemInputNumberWithUnit = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
        basicInputs={["without"]}
    >
        <FormItemInputNumberWithUnit
            form={form}
            name="distance"
            tooltipTitle="this is the distance question"
            label="what is the disatnce between USA and AUS ?"
            rules={[{required: true, message: "⚠ Please input the distance!"}]}
            unit="Km"
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};
