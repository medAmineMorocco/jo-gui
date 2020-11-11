import React, {useState} from 'react';
import {withKnobs, text, number} from "@storybook/addon-knobs";
import { FormCounter } from '@components/form/formCounter/FormCounter';
import {LaptopOutlined} from "@ant-design/icons";
import {Form as ConfiguredForm} from "@components/form/Form";
import {Form , Button} from "antd";
import "./stories.css";


export default { title: 'Data Entry/Counter', decorators: [withKnobs]};


let textCounter = "Nombre d'ordinateurs portable professionnels mis à votre disposition";
let title = "Test";
let name = "countValue";

const onFinish = (values) => {
    console.log('success', values);
};

export const counter = () => {
    const [form] = Form.useForm();
    const [count, ] = useState(0);

    return(
    <ConfiguredForm
    form={form}
    onFinish={onFinish}
    basicInputs={["without"]}
>
<FormCounter value={count}
             iconCounter={LaptopOutlined}
             textCounter={text('label', textCounter)}
             tooltipTitle={title} form={form} name={name}
             max={number('max', 9)}
/>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here !
            </Button>
        </Form.Item>
</ConfiguredForm>

    )};