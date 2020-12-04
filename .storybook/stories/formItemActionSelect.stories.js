import React from 'react';
import { FormItemActionSelect } from '@components/form/action/formItemActionSelect/FormItemActionSelect';
import { Form, Button } from 'antd';
import { Form as ConfiguredForm } from '@components/form/Form';
import './stories.css';

export default { title: 'Data Entry/Reduction Action/FormItemActionSelect'};

const onFinish = (values) => {
	console.log('success', values);
};

export const formItemActionSelect = () => {
	const [form] = Form.useForm();

	const options = [
		{ text: '1', value: 1 },
		{ text: '2', value: 2 },
		{ text: '3', value: 3 },
		{ text: '4', value: 4 },
	];
	return (
		<ConfiguredForm form={form} onFinish={onFinish}>
			<FormItemActionSelect form={form} name="firstSelect" options={options} />
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</ConfiguredForm>
	);
};
