import React from 'react';
import {withKnobs, text, object} from "@storybook/addon-knobs";
import { FormItemCheckboxes } from '@components/form/formItemCheckboxes/FormItemCheckboxes';
import { Form, Button } from 'antd';
import { Form as ConfiguredForm } from '@components/form/Form';
import './stories.css';

export default { title: 'Data Entry/FormItemCheckboxes', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemCheckboxes = () => {
    const [form] = Form.useForm();

    const options = [
        {
            label: 'Voiture',
            value: 'Voiture',
            onChange: (isChecked) => {
                console.log(isChecked);
            }
        },
        {
            label: 'Train',
            value: 'Train',
            onChange: (isChecked) => {
                console.log(isChecked);
            }
        },
        {
            label: 'Avion',
            value: 'Avion',
            onChange: (isChecked) => {
                console.log(isChecked);
            }
        }
    ]

    return (
        <ConfiguredForm form={form} onFinish={onFinish}>
            <FormItemCheckboxes
                form={form}
                name="country"
                                text={text('text', "quel moyen de transport ?")}
                                options={object('options', options)}/>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </ConfiguredForm>
    );
};
