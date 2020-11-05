import React, { useState } from 'react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { Form, Button } from 'antd';
import { Form as ConfiguredForm } from '@components/form/Form';
import { FormItemActionReduction } from '@components/form/action/formItemActionReduction/FormItemActionReduction';
import { FormItemInputNumber } from '@components/form/formItemInputNumber/FormItemInputNumber';
import './stories.css';

export default { title: 'FormItemActionReduction', decorators: [withKnobs] };

const onFinish = (values) => {
	console.log('success', values);
};

export const actionReduction = () => {
	const [form] = Form.useForm();

	let savierVous =
		'Réduire sa consommation de café est plus facile que vous le pensez.Etiam sagittis et quam sed consectetur.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Ut ut arcu in nisi ultrices accumsan.Donec in mi hendrerit pellent habitant morbi tristiqueligula sodales lobortis risus at dapibus.Vestibulum est metus.';

	const selectDetail = [
		{
			type: 'select',
			firstText: 'Chaque jour, privilégiez',
			name: 'firstSelect',
			options: [
				{ text: '0', value: 0 },
				{ text: '1', value: 1 },
				{ text: '2', value: 2 },
				{ text: '3', value: 3 },
				{ text: '4', value: 4 },
				{ text: '5', value: 5 },
				{ text: '6', value: 6 },
				{ text: '7', value: 7 },
				{ text: '8', value: 8 },
				{ text: '9', value: 9 },
			],
			secondText: 'tasse(s) de café en vrac plutôt qu’en capsule.',
			questionName: 'question1',
		},
		{
			type: 'select',
			firstText: 'Chaque jour, privilégiez',
			name: 'secondSelect',
			options: [
				{ text: '0', value: 0 },
				{ text: '20', value: 20 },
				{ text: '40', value: 40 },
				{ text: '60', value: 60 },
				{ text: '80', value: 80 },
			],
			secondText: "tasse(s) de thé plutôt qu'un café en vrac.",
			questionName: 'question1',
		},
		{
			type: 'input',
			firstText: 'Chaque jour, privilégiez',
			name: 'thirdSelect',
			secondText: 'tasse(s) de thé.',
			questionName: 'question1',
		},
	];

	const [render, setRender] = useState(0);

	const onFieldsChange = (changedFields, allFields) => {
		setRender(Math.random);
	};

	return (
		<ConfiguredForm form={form} onFinish={onFinish} onFieldsChange={onFieldsChange}>
			<FormItemInputNumber
				form={form}
				name="question1"
				label={'example of question'}
				rules={[{ required: true, message: '⚠ Please input your number!' }]}
			/>
			<FormItemActionReduction
				form={form}
				switchName="switch_name"
				selectDetail={selectDetail}
				savierVous={savierVous}
				saviezVousPosition={number('saviezVousPosition', 1)}
				isOpened={boolean('isOpened', true)}
				render={render}
			/>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</ConfiguredForm>
	);
};
