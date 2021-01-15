import React from 'react';
import {withKnobs,object} from "@storybook/addon-knobs";
import {ChartResult} from "@components/result/chartResult/ChartResult";
import "./stories.css";


export default { title: "Charts/ChartEquilibre", decorators: [withKnobs]};


export const Chart = () => {
    const dataCircle1 = [
        {
          id: "Perso",
          label: "perso",
          value: 16818,
          color: "#3CB371",
        },
        {
          id: "Pro",
          label: "Pro",
          value: 25635,
          color: "#4682B4",
        },
      ];
      const dataCircle2 = [
        {
          id: "Déplacements professionnels",
          label: "Déplacements professionnels",
          value: 75,
          color: "#475C85",
        },
        {
          id: "Alimentation professionnelle",
          label: "Alimentation professionnelle",
          value: 6,
          color: "#6495ED",
        },
        {
          id: "Au bureau",
          label: "Au bureau",
          value: 15,
          color: "#87CEFA",
        },
        {
          id: "Utilisation du numérique (pro)",
          label: "Utilisation du numérique (pro)",
          value: 4,
          color: "#4682B4",
        },
      ];
      const dataCircle3 = [
        {
          id: "Logement",
          label: "Logement",
          value: 10,
          color: "#183299",
        },
        {
          id: "Biens du foyer",
          label: "Biens du foyer",
          value: 10,
          color: "#3ECE3B",
        },
        {
          id: "Biens personnels",
          label: "Biens personnels",
          value: 5,
          color: "#FF6666",
        },
        {
          id: "Utilisation du numérique (perso)",
          label: "Utilisation du numérique (perso)",
          value: 5,
          color: "#8543FB",
        },
        {
          id: "Alimentation personnelle",
          label: "Alimentation personnelle",
          value: 5,
          color: "#990000",
        },
    
        {
          id: "Déplacements Personnels",
          label: "Déplacements Personnels",
          value: 60,
          color: "#475C85",
        },
        {
          id: "Service publics",
          label: "Service publics",
          value: 5,
          color: "#D7C378",
        },
      ];
return(

<ChartResult dataCircle1={object('Graphique 1', dataCircle1)} dataCircle2={object('Graphique 2', dataCircle2)} dataCircle3={object('Graphique 3', dataCircle3)}/>
    
)}