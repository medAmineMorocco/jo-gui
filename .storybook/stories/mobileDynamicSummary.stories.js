import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {MobileDynamicSummary} from "@components/dynamicSummary/MobileDynamicSummary";
import "./stories.css";


export default {title: 'MobileDynamicSummary', decorators: [withKnobs]};


export const summaryBeforeIStart = () => <div style={{marginTop: '50px'}}>
    <MobileDynamicSummary size={5}/>
</div>;

export const summaryWhenIProcessFirstForm = () => <div style={{marginTop: '50px'}}>
    <MobileDynamicSummary size={5} current={0}/>
</div>;

export const summaryWhenICompleteTwoForms = () => <div style={{marginTop: '50px'}}>
    <MobileDynamicSummary size={5} current={2}/>
</div>;

export const summaryWhenIProcessLastForms = () => <div style={{marginTop: '50px'}}>
    <MobileDynamicSummary size={5} current={4}/>
</div>;