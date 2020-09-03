import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import {Summary} from "@components/summary/Summary";
import {DynamicSummary} from "@components/dynamicSummary/DynamicSummary";
import {persoItems} from '@utils/category';

export default { title: 'Summary & DynamicSummary', decorators: [withKnobs]};

export const summary = () => <Summary items={persoItems} />;

export const dynamicSummaryBeforeIStart = () => <DynamicSummary items={persoItems} />;

export const dynamicSummaryWhenIProcessFirstForm = () => <DynamicSummary items={persoItems} current={0} />;

export const dynamicSummaryWhenICompleteTwoForms = () => <DynamicSummary items={persoItems} current={2} />;

