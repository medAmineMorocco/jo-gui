import React from 'react';
import { Form } from 'antd';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { ConfiguredForm } from '../ConfiguredForm';
import { FormItemSwitch } from '@components/form/action/formItemSwitch/FormItemSwitch';
import './stories.css';

export default {
	title: 'Data Entry/Reduction Action/FormItemSwitch',
	decorators: [withKnobs],
};

export const formItemSwitch = () => {
	const [form] = Form.useForm();

	return (
		<ConfiguredForm form={form}>
			<FormItemSwitch
				form={form}
				name="itemSwitchValue"
				switchValue={boolean('disabled', false)}
				setSwitchValue={() => {}}
			/>
		</ConfiguredForm>
	);
};
