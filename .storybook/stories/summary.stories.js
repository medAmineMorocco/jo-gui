import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import {DynamicSummary} from "@components/dynamicSummary/DynamicSummary";
import {persoItems} from '@utils/category';

export default { title: 'DynamicSummary', decorators: [withKnobs]};

export const summaryBeforeIStart = () => <DynamicSummary items={persoItems} />;

export const summaryWhenIProcessFirstForm = () => <DynamicSummary items={persoItems} current={0} />;

export const summaryWhenICompleteTwoForms = () => <DynamicSummary items={persoItems} current={2} />;

