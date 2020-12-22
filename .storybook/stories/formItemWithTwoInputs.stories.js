import React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import { Form } from 'antd';
import { ConfiguredForm } from '../ConfiguredForm';
import { FormItemWithTwoInputs } from '@components/form/formItemWithTwoInputs/FormItemWithTwoInputs';
import './stories.css';

export default { title: 'Data Entry/FormItemWithTwoInputs', decorators: [withKnobs] };


export const formItemWithTwoInputs = () => {
	const [form] = Form.useForm();

	const label = 'incomingChoice';
	const options = {
		Essence: 'gasoline',
		Électricité: 'electric',
	};
	const defaultValue = 'gasoline';
	const incomingChoice = select(label, options, defaultValue);

	const questions = [
		{
			choice: 'gasoline',
			response: {
				name: 'litre',
				label: 'L/100 km',
			},
		},
		{
			choice: 'electric',
			response: {
				name: 'kilowatt',
				label: 'kWh/100 km',
			},
		},
	];

	return (
		<ConfiguredForm
			form={form}
		>
			<FormItemWithTwoInputs
				form={form}
				label={text('label', 'Consommation moyenne aux 100 km (si connue)')}
				tooltipTitle={text('infos', 'example of tooltip')}
				incomingChoice={incomingChoice}
				questions={questions}
			/>
		</ConfiguredForm>
	);
};
