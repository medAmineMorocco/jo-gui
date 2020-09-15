import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { FormItemSwitch } from '@components/form/action/formItemSwitch/FormItemSwitch';
import { Form, Button } from 'antd';
import { Form as ConfiguredForm } from '@components/form/Form';
import './stories.css';

export default {
	title: 'FormItemSwitch',
	decorators: [withKnobs],
};

const onFinish = (values) => {
	console.log('success', values);
};

export const formItemSwitch = () => {
	const [form] = Form.useForm();

	return (
		<ConfiguredForm form={form} onFinish={onFinish}>
			<FormItemSwitch
				form={form}
				name="itemSwitchValue"
				switchValue={false}
				setSwitchValue={() => {}}
			/>
			<Form.Item>
				<Button type="primary" htmlType="submit">
					Submit
				</Button>
			</Form.Item>
		</ConfiguredForm>
	);
};
