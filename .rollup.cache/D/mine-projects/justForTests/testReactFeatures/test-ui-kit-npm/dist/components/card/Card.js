import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { clsx } from 'clsx';
import s from './Card.module.scss';
const CardPolymorph = (props, ref) => {
    const { as: Component = 'div', className, ...rest } = props;
    return _jsx(Component, { className: clsx(s.root, className), ...rest, ref: ref });
};
export const Card = forwardRef(CardPolymorph);
