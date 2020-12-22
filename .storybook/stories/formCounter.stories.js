import React, {useState} from 'react';
import {withKnobs, text, number} from "@storybook/addon-knobs";
import {LaptopOutlined} from "@ant-design/icons";
import {Form} from "antd";
import {ConfiguredForm} from "../ConfiguredForm";
import {FormCounter} from '@components/form/formCounter/FormCounter';
import "./stories.css";


export default {title: 'Data Entry/Counter', decorators: [withKnobs]};


let textCounter = "Nombre d'ordinateurs portable professionnels mis à votre disposition";
let title = "Test";
let name = "countValue";

export const counter = () => {
    const [form] = Form.useForm();
    const [count,] = useState(0);

    return (
        <ConfiguredForm
            form={form}>
            <FormCounter value={count}
                         iconCounter={LaptopOutlined}
                         textCounter={text('label', textCounter)}
                         tooltipTitle={title} form={form} name={name}
                         max={number('max', 9)}
            />
        </ConfiguredForm>

    )
};