import React from 'react';
import {Button, Form} from "antd";
import { Form as ConfiguredForm } from '@components/form/Form';
import { FormItemRadioButtons } from '@components/form/formItemRadioButtons/FormItemRadioButtons';
import {withKnobs, text, boolean, object} from "@storybook/addon-knobs";
import './stories.css';

export default { title: 'Data Entry/FormItemRadioButtons', decorators: [withKnobs]};

const options = [
	{
		label: 'Appartement',
		value: 'Appartement'
	},
	{
		label: 'Maison individuelle',
		value: 'Maison_individuelle'
	}
]

const onFinish = (values) => {
	console.log('success', values);
};

const onChange = (checkedValues) => {
	console.log(checkedValues);
}

export const formItemRadioButtons = () => {
	const [form] = Form.useForm();

	return <ConfiguredForm form={form} onFinish={onFinish}>
		<FormItemRadioButtons
			form={form}
			label={text('label', 'Effectuez-vous des déplacements professionels ?')}
							  name="response"
							  options={object('options', options)}
							  isMultipleSelection={boolean('isMultipleSelection', false)}
							  onChange={onChange}/>
		<Form.Item>
			<Button type="primary" htmlType="submit">
				Submit
			</Button>
		</Form.Item>
	</ConfiguredForm>
};
