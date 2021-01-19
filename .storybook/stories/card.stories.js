import React from 'react';
import {withKnobs, text, color} from '@storybook/addon-knobs';
import {Card} from "@components/card/Card";

export default { title: 'Data Display/Card', decorators: [withKnobs] };

export const card = () => {
    return <div style={{margin: '40px'}}>
    <Card title={text('title', 'DEJA 45 % DE REDUCTION POssible !')}
          backgroundColor={color('backgroundColor', '#17b7b0')}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </Card>
    </div>
}

