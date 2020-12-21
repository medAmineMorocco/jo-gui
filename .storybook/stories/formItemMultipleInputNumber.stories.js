import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form} from "antd";
import {ConfiguredForm} from "../ConfiguredForm";
import {FormItemMultipleInputNumber} from '@components/form/formItemMultipleInputNumber/FormItemMultipleInputNumber';
import "./stories.css";


export default {title: 'Data Entry/FormItemMultipleInputNumber', decorators: [withKnobs]};

export const formItemMultipleInputNumber = () => {

    const [form] = Form.useForm();

    const questions =[
        {
            name: 'eco',
            label: 'Économie',
        },
        {
            name: 'busi',
            label: 'Business',
        },
        {
            name: 'prem',
            label: 'Première',
        }
    ];

  return <ConfiguredForm
      form={form}
  >
      <FormItemMultipleInputNumber
          form={form}
          name="multi"
          label={text('label', 'example of question ')}
          tooltipTitle={text('infos', 'example of tooltip')}
          questions={questions}
      />
  </ConfiguredForm>;
};

