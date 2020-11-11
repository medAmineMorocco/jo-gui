import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import { StyledTitle } from '@components/title/StyledTitle';
import "./stories.css";

export default { title: 'Title/StyledTitle', decorators: [withKnobs] };


export const styledTitle = () => <StyledTitle title1={text("title1", "mon impact")} title2={text("title2", "carbone")}/>;