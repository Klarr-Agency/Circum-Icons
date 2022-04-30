import React from 'react';
import { icons } from './iconList';
const Icon = ({ name, size, color, displayIcon }) => {

    displayIcon = icons.find((e) => e.name === name);

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            dangerouslySetInnerHTML={{__html: displayIcon.svg}}
        >
        </svg>
    )
};

Icon.defaultProps = {
    size: '32px',
    color: '#000'
}

export default Icon;