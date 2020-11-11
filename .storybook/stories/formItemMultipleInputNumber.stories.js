import React from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import {Form, Button} from "antd";
import {Form as ConfiguredForm} from "@components/form/Form";
import {FormItemMultipleInputNumber} from '@components/form/formItemMultipleInputNumber/FormItemMultipleInputNumber';
import "./stories.css";


export default {title: 'Data Entry/FormItemMultipleInputNumber', decorators: [withKnobs]};

const onFinish = (values) => {
    console.log('success', values);
};

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
      onFinish={onFinish}
      onFinishFailed={() => console.log('failed')}
  >
      <FormItemMultipleInputNumber
          form={form}
          name="multi"
          label={text('label', 'example of question ')}
          tooltipTitle={text('infos', 'example of tooltip')}
          questions={questions}
      />
      <Form.Item>
          <Button type="primary" htmlType="submit">
              Click here to see the error state
          </Button>
      </Form.Item>
  </ConfiguredForm>;
};

