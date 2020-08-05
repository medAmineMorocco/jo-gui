import React from 'react';
import { Button as ButtonAntd} from "antd";
import "./button.css";

export function Button({text, icon, style}) {
    return <ButtonAntd style={style} className="custom-btn" shape="round">
        {text} {icon && icon()}
    </ButtonAntd>
}
