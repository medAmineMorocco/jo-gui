import React from 'react';
import {MemoryRouter} from "react-router-dom";
import {withKnobs} from "@storybook/addon-knobs";
import {Header} from '@components/header/Header';
import {HeaderWithCategory} from "@components/header/HeaderWithCategory";
import "./stories.css";


export default {title: 'Header', decorators: [withKnobs]};


export const header = () => <Header>
    <img
        className="logo"
        src="/images/paris-2024.png"
        alt="paris-2024"
        width="260px"
        height="132px"
    />
</Header>;

export const headerWithCategory = () => <MemoryRouter><HeaderWithCategory title1="vie"
                                                                          title2="personnelle"/></MemoryRouter>;