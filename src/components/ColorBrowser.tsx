import React from 'react';
import { Color } from '../types/Color';
interface Props {
    color: Color;
}
export default function ColorBrowser(props: Props) {
    const divStyle: React.CSSProperties = {
        width: '11rem',
        height: '7rem',
        backgroundColor: `rgb(${props.color.red},${props.color.green},${props.color.blue})`,
    };
    return <div style={divStyle}></div>;
}
