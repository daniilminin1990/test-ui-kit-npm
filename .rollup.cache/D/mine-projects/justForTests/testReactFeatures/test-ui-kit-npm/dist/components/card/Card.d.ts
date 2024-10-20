import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, ReactNode } from 'react';
export type CardProps<T extends ElementType = 'div'> = {
    as?: T;
    children?: ReactNode;
    className?: string;
} & ComponentPropsWithoutRef<T>;
declare const CardPolymorph: <T extends ElementType<any, keyof import("react").JSX.IntrinsicElements> = "div">(props: CardProps<T>, ref: any) => import("react/jsx-runtime").JSX.Element;
export declare const Card: <T extends ElementType<any, keyof import("react").JSX.IntrinsicElements> = "div">(props: {
    ref?: ForwardedRef<ElementRef<T>>;
} & {
    as?: T;
    children?: ReactNode;
    className?: string;
} & import("react").PropsWithoutRef<import("react").ComponentProps<T>> & Omit<import("react").PropsWithoutRef<import("react").ComponentProps<T>>, "as" | "children" | "className" | keyof import("react").PropsWithoutRef<import("react").ComponentProps<T>>>) => ReturnType<typeof CardPolymorph>;
export {};
