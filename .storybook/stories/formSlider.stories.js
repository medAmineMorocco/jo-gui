import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { FormSlider } from '@components/form/formSlider/FormSlider';
import {Form as ConfiguredForm} from "@components/form/Form";
import {ReactComponent as TeaSvg} from "@components/form/formSlider/tea.svg";
import {ReactComponent as CapsuleSvg} from "@components/form/formSlider/capsule.svg";
import {ReactComponent as CoffeeSvg} from "@components/form/formSlider/coffee.svg";
import {Form , Button} from "antd";
import "./stories.css";



export default { title: 'Slider', decorators: [withKnobs]};

let questions = [
    {
      label:"Café en capsule",
      name:"erf12",
      logo: <CapsuleSvg/>,
    },
    {
      label:"Café en vrac",
      name:"erf13",
      logo:<CoffeeSvg/>,
       
     },
     {
      label:"Tasse de Thé",
      name:"erf14",
      logo:<TeaSvg/>,
     }
    ];
    const tooltipTitle="Test";

const onFinish = (values) => {
    console.log('success', values);
};

export const slider = () => {
    const [form] = Form.useForm();
    return(
    <ConfiguredForm
    form={form}
    onFinish={onFinish}
    basicInputs={["without"]}
>
<FormSlider labels={"Combien de boissons chaudes prenez-vous par jour ?"} questions={questions} tooltipTitle={tooltipTitle} form={form} />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here !
            </Button>
        </Form.Item>
</ConfiguredForm>
    )};
