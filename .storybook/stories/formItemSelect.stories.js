import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemSelect} from '@components/form/formItemSelect/FormItemSelect';
import "./stories.css";


export default {title: 'FormItemSelect', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemSelect = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
    >
        <FormItemSelect
            form={form}
            name="without"
            tooltipTitle="this is a tooltip"
            label="Label with toolitp"
            options={[{text: 'Jack', value: 'Jack'}, {text: 'Lucy', value: 'Lucy'}, {text: 'yiminghe', value: 'yiminghe'}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};

