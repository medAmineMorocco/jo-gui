import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {Button, Form} from "antd";
import {MealsOfWeek} from "@components/form/mealsOfWeek/MealsOfWeek";
import {Form as ConfiguredForm} from "@components/form/Form";
import {ReactComponent as MeatSvg} from "@components/form/mealsOfWeek/meat.svg";
import {ReactComponent as ChickenSvg} from "@components/form/mealsOfWeek/chicken.svg";
import {ReactComponent as VegetablesSvg} from "@components/form/mealsOfWeek/vegetables.svg";
import "./stories.css";


export default {title: 'MealsOfWeek', decorators: [withKnobs]};

const onFinishFailed = ({_, errorFields}) => {
    console.log('failed', errorFields);
};

const onFinish = (values) => {
    console.log('success', values);
};

export const mealsOfWeek = () => {
    const [form] = Form.useForm();

    const questions = [
        {
            name: 'meat',
            icon: MeatSvg,
        },
        {
            name: 'chicken',
            icon: ChickenSvg,
        },
        {
            name: 'vegetables',
            icon: VegetablesSvg,
        }
    ];

    return <ConfiguredForm
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <MealsOfWeek
            form={form}
            name="meals"
            questions={questions}
            label="meals of week"
            tooltipTitle="plz fill meals of all days"
        />
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Click here to see the error state
            </Button>
        </Form.Item>
    </ConfiguredForm>;
};
