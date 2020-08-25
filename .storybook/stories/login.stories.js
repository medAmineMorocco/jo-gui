import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Login } from '@components/login/Login';
import "./stories.css";


export default { title: 'Login', decorators: [withKnobs]};


export const login = () => <Login/>;