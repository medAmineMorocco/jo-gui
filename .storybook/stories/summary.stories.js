import React from 'react';
import { withKnobs, number } from "@storybook/addon-knobs";
import {Summary} from "@components/summary/Summary";
import {DynamicSummary} from "@components/dynamicSummary/DynamicSummary";
import {persoItems} from '@utils/category';

export default { title: 'Summary & DynamicSummary', decorators: [withKnobs]};

export const summary = () => <Summary items={persoItems} />;

export const dynamicSummary = () => <DynamicSummary items={persoItems} current={number('current', -1)} />;


