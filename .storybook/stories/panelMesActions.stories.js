import React from 'react';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { PanelMesActions } from '@components/panelMesActions/PanelMesActions';

export default { title: 'Data Display/PanelMesActions', decorators: [withKnobs] };

export const panelMesActions = () => {
	const actions = [
		{
			description: 'Bannir les objets à usage unique (gobelets, bouteilles d’eau plastiques, couverts en plastique…) ',
			reduction: -140,
			avg_reduction: -0.08632031787202915,
		},
		{
			description: 'Eteindre ses appareils dès que possible (soirs, week-ends, vacances…)',
			reduction: -33,
			avg_reduction: -0.020346932069835445,
		},
		{
			description: 'Prendre les esacaliers',
			reduction: -90,
			avg_reduction: -0.05549163291773303,
		},
	];

	const onChange = (event) => console.log('isChecked', event);

	const selectOptions = {
		vie_personnelle: 'Vie personnelle',
		vie_professionnelle: 'Vie professionnelle',
	};
	const selectDefaultValue = 'Vie professionnelle';

	return (
		<PanelMesActions
			actions={object('actions', actions)}
			thematic={text('Thematic', 'Logement')}
			category={select('category', selectOptions, selectDefaultValue)}
			onChange={onChange}
		/>
	);
};
