import React from 'react';
import cn from 'classnames';
import { buttonSizeClasses, buttonLoaderColors, buttonLoaderSizes } from '../../constants/button';
import Loader from '../loader';
import Counter from '../counter';

import './style.styl';

type ButtonProps = {
    type: 'button' | 'submit' | 'reset';
    theme?: 'primary' | 'secondary';
    size?: 28 | 36 | 56;
    state?: 'loading' | 'disabled',
    counter?: boolean;
    label: string;
    focused?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> & { Counter: typeof Counter } = ({ type, theme = 'primary', size = 36, state, counter, label, focused, children, onClick }) => {
    return (
        <button
            type={type}
            disabled={state === 'disabled'}
            className={cn('ui-button', {
                [`ui-button--${theme}`]: theme,
                [`ui-button--${buttonSizeClasses[size]}`]: size,
                [`ui-button--${state}`]: state,
                ['ui-button--focused']: focused,
                ['is-loading']: state === 'loading'
            })}
            onClick={onClick}
        >
            { label }

            { counter && children }

            {state === 'loading' && (
                <div className={'ui-button__loader'}>
                    <Loader
                        size={buttonLoaderSizes[size]}
                        color={buttonLoaderColors[theme]}
                    />
                </div>
            )}
        </button>
    );
};

Button.Counter = Counter;

export default Button;
