import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Form, Button } from 'antd';
import { Form as ConfiguredForm } from '@components/form/Form';
import { FormItemActionReduction } from '@components/form/action/formItemActionReduction/FormItemActionReduction';
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
			index: 1,
			type: 'select',
			firstText: 'Chaque jour, privilégiez',
			name: 'firstSelect',
			options: [
				{ text: '2', value: 2 },
				{ text: '3', value: 3 },
				{ text: '4', value: 4 },
				{ text: '5', value: 5 },
			],
			secondText: 'tasse(s) de café en vrac plutôt qu’en capsule.',
		},
		{
			index: 2,
			type: 'select',
			firstText: 'Chaque jour, privilégiez',
			name: 'secondSelect',
			options: [
				{ text: '2', value: 2 },
				{ text: '3', value: 3 },
				{ text: '4', value: 4 },
				{ text: '5', value: 5 },
			],
			secondText: "tasse(s) de thé plutôt qu'un café en vrac.",
		},
		{
			index: 3,
			type: 'input',
			firstText: 'Chaque jour, privilégiez',
			name: 'thirdSelect',
			secondText: 'tasse(s) de thé.',
		},
	];

	return (
		<ConfiguredForm form={form} onFinish={onFinish}>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
			<br />
			<FormItemActionReduction
				form={form}
				title={text('title', 'Thé et café')}
				savierVous={savierVous}
				selectDetail={selectDetail}
			/>
		</ConfiguredForm>
	);
};
