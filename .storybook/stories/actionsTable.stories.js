import React from 'react';
import {array, object, withKnobs} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import {Card} from "@components/card/Card";
import {ActionsTable} from "@components/actionsTable/ActionsTable";
import {CATEGORY} from "@utils/category";

export default { title: 'Data Display/ActionsTable', decorators: [withKnobs] };

export const actionsTable = () => {

    const actions = [
        {
            category: CATEGORY.PRO,
            description: 'Bannir les objets à usage unique (gobelets, bouteilles d’eau plastiques, couverts en plastique…) ',
            reduction: -140,
            gain: -0.08632031787202915
        },
        {
            category: CATEGORY.PRO,
            description: 'Eteindre ses appareils dès que possible (soirs, week-ends, vacances…)',
            reduction: -33,
            gain: -0.020346932069835445
        },
        {
            category: CATEGORY.PRO,
            description: 'Prendre les esacaliers',
            reduction: -90,
            gain: -0.05549163291773303
        },
    ];


    return <ActionsTable columns={array('columns',['Actions de réductions', 'Gain', 'Je me lance !'])} actions={object('actions', actions)} onChange={action('checked')} />
}

