import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Overlay } from '@components/overlay/Overlay.js';
import "./stories.css";


export default { title: 'Overlay', decorators: [withKnobs]};

const dataTabs = [
    {
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitNam sed ullamcorper felis, sit amet finibus odio.Vivamus sapien arcu, fermentum a purus at, lacinia consequat lorem",
        image:
            "https://blogs.letemps.ch/boris-gojanovic/wp-content/uploads/sites/75/2020/03/Running-away-virus.jpg",
        sousText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper felis, sit amet finibus odio. Vivamus sapien arcu, fermentum a purus at, lacinia consequat lorem.",
    },
    {
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitNam sed ullamcorper felis, sit amet finibus odio.Vivamus sapien arcu, fermentum a purus at, lacinia consequat lorem",
        image:
            "https://blogs.letemps.ch/boris-gojanovic/wp-content/uploads/sites/75/2020/03/Running-away-virus.jpg",
        sousText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper felis, sit amet finibus odio. Vivamus sapien arcu, fermentum a purus at, lacinia consequat lorem.",
    },
    {
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitNam sed ullamcorper felis, sit amet finibus odio.Vivamus sapien arcu, fermentum a purus at, lacinia consequat lorem",
        image:
            "https://blogs.letemps.ch/boris-gojanovic/wp-content/uploads/sites/75/2020/03/Running-away-virus.jpg",
        sousText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed ullamcorper felis, sit amet finibus odio. Vivamus sapien arcu, fermentum a purus at, lacinia consequat lorem.",
    },
];

export const overlay = () => <Overlay title="Comment réduire sont empreinte ?" items={dataTabs}/>;
