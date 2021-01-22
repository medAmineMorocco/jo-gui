import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Form } from 'antd';
import { ConfiguredForm } from '../ConfiguredForm';
import { FormItemInputNumberWithUnit } from '@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit';
import './stories.css';

export default { title: 'Data Entry/FormItemInputNumberWithUnit', decorators: [withKnobs] };

export const formItemInputNumberWithUnit = () => {
	const [form] = Form.useForm();

	return (
		<ConfiguredForm form={form}>
			<FormItemInputNumberWithUnit
				form={form}
				name="distance"
				tooltipTitle={text('infos', 'example of tooltip')}
				label={text('label', 'what is the distance between USA and AUS ?')}
				rules={[{ required: true, message: '⚠ Please input the distance!' }]}
				unit={text('unit', 'km')}
			/>
		</ConfiguredForm>
	);
};
