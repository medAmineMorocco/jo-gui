import 'antd/dist/antd.css';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import './storybook.css';

addDecorator(withA11y);

addParameters({
	viewport: {
		viewports: INITIAL_VIEWPORTS,
		defaultViewport: 'desktop',
	},
});
