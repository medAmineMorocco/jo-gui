import React from 'react';
import { BoxSides } from '@components/box/BoxSides';
import "./stories.css";


export default { title: 'Layout/BoxSides'};

const DivWithText = ({color, text}) => <div style={{backgroundColor: color, height:"100%"}}>{text}</div>;

export const boxSides = () => <BoxSides left={<DivWithText color={"orange"} text="left"/>} right={<DivWithText color={"yellow"} text="right"/>} />;