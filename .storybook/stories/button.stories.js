import React from 'react';
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from '@components/button/Button';
import { BackButton } from '@components/button/BackButton';
import "./stories.css";


export default { title: 'General/Button'};


export const simpleButton = () => <Button text="ok"/>;
export const buttonWithIcon = () => <Button text="suite" icon={<ArrowRightOutlined/>}/>;
export const buttonWithCustomStyle = () => <Button text="suite" style={{width: '300px'}}/>;
export const backButton = () => <BackButton onClick={() => console.log('click')} icon={() => <ArrowLeftOutlined />} />;