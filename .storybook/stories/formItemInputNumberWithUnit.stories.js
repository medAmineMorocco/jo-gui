import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemInputNumberWithUnit} from '@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit';
import "./stories.css";


export default {title: 'Data Entry/FormItemInputNumberWithUnit', decorators: [withKnobs]};

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
            tooltipTitle={text('infos', 'example of tooltip')}
            label={text('label', 'what is the distance between USA and AUS ?')}
            rules={[{required: true, message: "⚠ Please input the distance!"}]}
            unit={text('unit', 'Km')}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};
