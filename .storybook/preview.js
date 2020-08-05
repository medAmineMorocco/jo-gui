import 'antd/dist/antd.css';
import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import './storybook.css'

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'desktop',
    }
});