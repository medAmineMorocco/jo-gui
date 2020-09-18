import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { TitleWithHorizontalLine } from '@components/title/TitleWithHorizontalLine';
import './stories.css';

export default { title: 'titleWithHorizontalLine', decorators: [withKnobs] };

export const titleWithHorizontalLine = () => (
	<TitleWithHorizontalLine title={text('title', 'En train')} />
);
