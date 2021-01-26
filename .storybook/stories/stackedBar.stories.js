import React from 'react';
import {withKnobs} from '@storybook/addon-knobs';
import {StackedBar} from "@components/stackedBar/StackedBar";

export default { title: 'Charts/StackedBar', decorators: [withKnobs] };

export const stackedBar = () => {
    return <div style={{width: '100%', height: '300px'}}>
        <StackedBar />
    </div>
}

