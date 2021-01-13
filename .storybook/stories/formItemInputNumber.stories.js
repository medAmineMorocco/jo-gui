import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Form } from 'antd';
import { ConfiguredForm } from '../ConfiguredForm';
import { FormItemInputNumber } from '@components/form/formItemInputNumber/FormItemInputNumber';
import './stories.css';

export default { title: 'Data Entry/FormItemInputNumber', decorators: [withKnobs] };

export const formItemInputNumber = () => {
	const [form] = Form.useForm();

	return (
		<ConfiguredForm form={form}>
			<FormItemInputNumber
				form={form}
				name="without"
				tooltipTitle={text('infos', 'example of tooltip')}
				label={text('label', 'example of question')}
				rules={[{ required: true, message: '⚠ Please input your number!' }]}
			/>
		</ConfiguredForm>
	);
};
