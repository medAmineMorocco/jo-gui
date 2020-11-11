import React from 'react';
import {number, withKnobs} from "@storybook/addon-knobs";
import {MobileDynamicSummary} from "@components/dynamicSummary/MobileDynamicSummary";
import "./stories.css";


export default {title: 'Summary/MobileDynamicSummary', decorators: [withKnobs]};


export const summary = () => <div style={{marginTop: '50px'}}>
    <MobileDynamicSummary size={5} current={number('current', -1)}/>
</div>;
