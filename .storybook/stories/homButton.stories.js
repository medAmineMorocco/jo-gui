import React from 'react';
import {withKnobs , boolean} from "@storybook/addon-knobs";
import { HomeButton } from '@components/homeButton/HomeButton';
import "./stories.css";



export default { title: 'homeButton', decorators: [withKnobs]};



export const homeButton = () => {

    return(

    <HomeButton isFinish={boolean('brightness', false)}/>

    )}