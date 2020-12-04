import React from 'react';
import {text, withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemSelect} from '@components/form/formItemSelect/FormItemSelect';
import "./stories.css";


export default {title: 'Data Entry/FormItemSelect', decorators: [withKnobs]};

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
            label={text('label', 'example of question')}
            tooltipTitle={text('infos', 'example of tooltip')}
            options={[{text: 'Jack', value: 'Jack'}, {text: 'Lucy', value: 'Lucy'}, {text: 'yiminghe', value: 'yiminghe'}]}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};

