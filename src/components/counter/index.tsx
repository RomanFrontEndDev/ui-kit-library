import React from 'react';
import cn from 'classnames';
import { formatQuantity } from '../../helpers/counter';
import { counterSizeClasses, counterThemeClasses } from '../../constants/counter';

import './style.styl';

type CounterProps = {
    theme?: 'primary' | 'secondary';
    size?: 8 | 12 | 16 | 20 | 24;
    stroke?: boolean;
    quantity?: string;
    pulse?: boolean;
};

const Counter: React.FC<CounterProps> = ({ theme = 'primary', size = 24, stroke, quantity = '', pulse }) => {
    return (
        <div className={cn('ui-counter', {
            [`ui-counter--${counterThemeClasses[theme]}`]: theme,
            [`ui-counter--${counterSizeClasses[size]}`]: size,
            ['ui-counter--stroke']: stroke,
            ['ui-counter--pulse']: pulse
        })}>
            { size !== 8 && size !== 12 ? formatQuantity(quantity) : '' }
        </div>
    );
};

export default Counter;
