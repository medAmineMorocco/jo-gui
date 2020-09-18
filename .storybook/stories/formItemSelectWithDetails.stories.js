import React from 'react';
import {text, withKnobs} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemSelectWithDetails} from '@components/form/formItemSelectWithDetails/FormItemSelectWithDetails';
import "./stories.css";


export default {title: 'FormItemSelectWithDetails', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

export const formItemSelectWithDetails = () => {
    const [form] = Form.useForm();
    const subQuestions = {
        Jack: [
            {
                question: 'question 1',
                name: 'question1',
                defaultResponse: 200
            },
            {
                question: 'question 2',
                name: 'question2',
                defaultResponse: 230,
            }
        ],
        Lucy: [
            {
                question: 'question 1',
                name: 'question1',
                defaultResponse: 100
            },
            {
                question: 'question 2',
                name: 'question2',
                defaultResponse: 130,
            }
        ]
    };

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
        basicInputs={["without"]}
    >
        <FormItemSelectWithDetails
            form={form}
            name="distance"
            label={text('label', 'what is the disatnce between USA and AUS ?')}
            tooltipTitle={text('infos', 'example of tooltip')}
            options={[{text: 'Jack', value: 'Jack'}, {text: 'Lucy', value: 'Lucy'}, {
                text: 'yiminghe',
                value: 'yiminghe'
            }]}
            subQuestions={subQuestions}
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};
