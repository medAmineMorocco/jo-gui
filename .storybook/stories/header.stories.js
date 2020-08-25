import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Header } from '@components/header/Header';
import "./stories.css";


export default { title: 'Header', decorators: [withKnobs]};


export const header = () => <Header/>;
