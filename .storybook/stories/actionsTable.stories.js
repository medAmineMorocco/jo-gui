import React from 'react';
import {array, object, withKnobs} from '@storybook/addon-knobs';
import {ActionsTable} from "@components/actionsTable/ActionsTable";

export default { title: 'Data Display/ActionsTable', decorators: [withKnobs] };

export const actionsTable = () => {

    const actions = [
        {
            description: 'Bannir les objets à usage unique (gobelets, bouteilles d’eau plastiques, couverts en plastique…) ',
            reduction: -140,
            avg_reduction: -0.08632031787202915
        },
        {
            description: 'Eteindre ses appareils dès que possible (soirs, week-ends, vacances…)',
            reduction: -33,
            avg_reduction: -0.020346932069835445
        },
        {
            description: 'Prendre les esacaliers',
            reduction: -90,
            avg_reduction: -0.05549163291773303
        },
    ];

    const onChange =  (event) => console.log('isChecked', event);

    return <ActionsTable columns={array('columns',['Actions de réductions', 'Gain', 'Je me lance !'])} actions={object('actions', actions)} onChange={onChange} />
}

