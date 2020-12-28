import React from 'react';
import { Form, Button } from 'antd';
import { withKnobs, boolean, text, object } from '@storybook/addon-knobs';
import { FormSlider } from '@components/form/formSlider/FormSlider';
import { ConfiguredForm } from '../ConfiguredForm';
import { ReactComponent as TeaSvg } from '@components/form/formSlider/tea.svg';
import { ReactComponent as CapsuleSvg } from '@components/form/formSlider/capsule.svg';
import { ReactComponent as CoffeeSvg } from '@components/form/formSlider/coffee.svg';
import './stories.css';

export default { title: 'Data Entry/Slider', decorators: [withKnobs] };

let questions = [
	{
		label: 'Café en capsule',
		name: 'erf12',
		logo: <CapsuleSvg />,
		min: 0,
		max: 10,
		value: 2,
	},
	{
		label: 'Café en vrac',
		name: 'erf13',
		logo: <CoffeeSvg />,
		min: 0,
		max: 10,
		value: 4,
	},
	{
		label: 'Tasse de Thé',
		name: 'erf14',
		logo: <TeaSvg />,
		min: 0,
		max: 10,
		value: 8,
	},
];
const tooltipTitle = 'Test';

export const slider = () => {
	const [form] = Form.useForm();

	return (
		<ConfiguredForm form={form}>
			<FormSlider
				form={form}
				labels={text('labels', 'Combien de boissons chaudes prends-tu par jour ?')}
				tooltipTitle={text('tooltipTitle', tooltipTitle)}
				questions={object('questions', questions)}
				isInline={boolean('isInline', true)}
			/>
		</ConfiguredForm>
	);
};
