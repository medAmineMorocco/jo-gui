import React from 'react';
import { number, object, withKnobs } from '@storybook/addon-knobs';
import { TimelineChart } from '@components/timelineChart/TimelineChart';

export default { title: 'TimelineChart', decorators: [withKnobs] };

let timelineItems = [
    {
      value: 2,
      description: "Cible de l’accord de Paris",
      color: "#d7c378",
    },
    {
        value: 2,
        description: "Moyenne indienne",
        color: "#C4C4C4",
      },
    {
      value: 6,
      description: "Le français bas carbone",
      color: "#C4C4C4",
    },
    {
      value: 7.8,
      description: "Moyenne Green possibleurs Paris 2024",
      color: "#986515",
    },
    {
      value: 11.2,
      description: "Moyenne française",
      color: "#C4C4C4",
    },
    {
      value: 13,
      description: "Moyenne européenne",
      color: "#C4C4C4",
    },
    {
      value: 16,
      description: "Moyenne Nord-Américaine",
      color: "#C4C4C4",
    }
  ];

export const timelineChart = () => <TimelineChart userResult={number("userResult", 4)} items={object("items", timelineItems)} />;
