import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import { Overlay } from '@components/overlay/Overlay';
import './stories.css';

export default { title: 'Feedback/Overlay', decorators: [withKnobs] };

const dataTabs = [
	{
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu justo, auctor ut euismod non, accumsan sed mauris. Fusce tellus nisi, ultrices id turpis at, porta tristique turpis. Vestibulum ex ex, consectetur id est ut, dignissim lacinia quam. Donec tristique consequat rutrum. Duis vestibulum elementum aliquam. Etiam iaculis euismod justo ut gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio ante. Nunc ullamcorper eu velit in pretium. In hac habitasse platea dictumst. Curabitur fringilla turpis quis enim',
		image: 'https://blogs.letemps.ch/boris-gojanovic/wp-content/uploads/sites/75/2020/03/Running-away-virus.jpg',
	},
	{
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu justo, auctor ut euismod non, accumsan sed mauris. Fusce tellus nisi, ultrices id turpis at, porta tristique turpis. Vestibulum ex ex, consectetur id est ut, dignissim lacinia quam. Donec tristique consequat rutrum. Duis vestibulum elementum aliquam. Etiam iaculis euismod justo ut gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut odio ante. Nunc ullamcorper eu velit in pretium. In hac habitasse platea dictumst. Curabitur fringilla turpis quis enim tincidunt luctus.',
	},
	{
		image: 'https://blogs.letemps.ch/boris-gojanovic/wp-content/uploads/sites/75/2020/03/Running-away-virus.jpg',
	},
];

export const overlay = () => (
	<Overlay title={text('Title', 'Comment réduire sont empreinte ?')} items={object('Data', dataTabs)} />
);
