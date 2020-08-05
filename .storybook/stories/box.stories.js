import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { BoxSides } from '@components/box/BoxSides';
import "./stories.css";


export default { title: 'BoxSides', decorators: [withKnobs]};

const DivWithText = ({color, text}) => <div style={{backgroundColor: color, height:"100%"}}>{text}</div>;

export const boxSides = () => <BoxSides left={<DivWithText color={"orange"} text="left"/>} right={<DivWithText color={"yellow"} text="right"/>} />;