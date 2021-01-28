import React from 'react';
import { object, withKnobs } from '@storybook/addon-knobs';
import { TimelineChart } from '@components/timelineChart/TimelineChart';

export default { title: 'Charts/TimelineChart', decorators: [withKnobs] };

let timelineItems = [
	{
		value: 4,
		description: 'Tu es ici !',
		color: '#EE334E',
	},
	{
		value: 2,
		description: 'Cible de l’accord de Paris',
		color: '#d7c378',
	},
	{
		value: 2,
		description: 'Indien.ne moyen.ne',
		color: '#C4C4C4',
	},
	{
		value: 6,
		description: 'La français.e engagé.e',
		color: '#C4C4C4',
	},
	{
		value: 10.1,
		description: 'Français.e moyen.ne',
		color: '#986515',
	},
	{
		value: 11.7,
		description: 'Européen.ne moyenne',
		color: '#C4C4C4',
	},
	{
		value: 16,
		description: 'Nord-Américain.e moyen.ne',
		color: '#C4C4C4',
	},
];

export const timelineChart = () => <TimelineChart items={object('items', timelineItems)} />;
