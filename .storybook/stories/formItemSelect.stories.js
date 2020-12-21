import React from 'react';
import {text, withKnobs} from "@storybook/addon-knobs";
import {Form} from "antd";
import {ConfiguredForm} from "../ConfiguredForm";
import {FormItemSelect} from '@components/form/formItemSelect/FormItemSelect';
import "./stories.css";


export default {title: 'Data Entry/FormItemSelect', decorators: [withKnobs]};

export const formItemSelect = () => {
    const [form] = Form.useForm();

    return <ConfiguredForm
        form={form}
    >
        <FormItemSelect
            form={form}
            name="without"
            label={text('label', 'example of question')}
            tooltipTitle={text('infos', 'example of tooltip')}
            options={[{text: 'Jack', value: 'Jack'}, {text: 'Lucy', value: 'Lucy'}, {text: 'yiminghe', value: 'yiminghe'}]}
        />
    </ConfiguredForm>;
};

