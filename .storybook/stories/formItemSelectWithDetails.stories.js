import React from 'react';
import {text, withKnobs} from "@storybook/addon-knobs";
import {Form} from "antd";
import {ConfiguredForm} from "../ConfiguredForm";
import {FormItemSelectWithDetails} from '@components/form/formItemSelectWithDetails/FormItemSelectWithDetails';
import "./stories.css";


export default {title: 'Data Entry/FormItemSelectWithDetails', decorators: [withKnobs]};

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
    </ConfiguredForm>;
};
