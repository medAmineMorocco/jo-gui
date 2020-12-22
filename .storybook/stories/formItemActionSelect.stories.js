import React from 'react';
import {Form} from "antd";
import { ConfiguredForm } from '../ConfiguredForm';
import { FormItemActionSelect } from '@components/form/action/formItemActionSelect/FormItemActionSelect';
import './stories.css';

export default { title: 'Data Entry/Reduction Action/FormItemActionSelect'};

export const formItemActionSelect = () => {

	const [form] = Form.useForm();

	const options = [
		{ text: '1', value: 1 },
		{ text: '2', value: 2 },
		{ text: '3', value: 3 },
		{ text: '4', value: 4 },
	];
	return (
		<ConfiguredForm form={form}>
			<FormItemActionSelect form={form} name="firstSelect" options={options} />
		</ConfiguredForm>
	);
};
