import React, {useState} from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import { Checkbox } from "@components/form/checkbox/Checkbox";
import "./stories.css";


export default {title: 'Data Entry/Checkbox', decorators: [withKnobs]};


export const checkobox = () =>  {
    const [value, setValue] = useState(false);

    const onChange = (val) => {
        setValue(val);
    };

   return <Checkbox value={value} onChange={onChange}/>;
};

