import React, {useContext} from 'react';
import {CursorContext} from "@src/providers/CursorProvider.jsx";

const Light = () => {
    const {position} = useContext(CursorContext);

    const transform = {
        x: position.x,
        y: position.y,
    };


    const lightStyle = {
        transform: `translate(calc(${position.x}px - 50%) , calc(${position.y}px - 50%))`,
    };

    return (
        <span style={lightStyle} className="light"></span>
    );
};

export default Light;
