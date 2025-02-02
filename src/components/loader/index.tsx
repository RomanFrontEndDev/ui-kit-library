import React from 'react';
import { COLOR_MAP } from '../../constants/loader';

import './style.styl';

type LoaderProps = {
    color: string;
    size?: number;
    strokeWidth?: number;
};

const Loader: React.FC<LoaderProps> = ({ color, size = 24, strokeWidth = 2 }) => {
    const DASH_RATIO = 2.5;

    const halfSize: number = size / 2;

    const radius: number = halfSize - strokeWidth;

    const style = (): Record<string, string | number> => {
        const dashNb = Math.round(DASH_RATIO * size);

        return {
            ...(COLOR_MAP.has(color) && {stroke: COLOR_MAP.get(color)}),
            '--dash': -dashNb,
        };
    };


    return (
        <span className={'ui-loader'}>
            <svg
                width={size}
                height={size}
                style={style()}
                className={'ui-loader__loader'}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx={halfSize}
                    cy={halfSize}
                    r={radius}
                    stroke-width={strokeWidth}
                />
            </svg>
        </span>
    );
};

export default Loader;

