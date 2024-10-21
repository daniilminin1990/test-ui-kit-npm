import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, ReactNode } from 'react';
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    children?: ReactNode;
    className?: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'primary' | 'secondary' | 'text';
} & ComponentPropsWithoutRef<T>;
export declare const ButtonPolymorph: <T extends ElementType<any, keyof import("react").JSX.IntrinsicElements> = "button">(props: ButtonProps<T>, ref: any) => import("react/jsx-runtime").JSX.Element;
export declare const Button: <T extends ElementType<any, keyof import("react").JSX.IntrinsicElements> = "button">(props: {
    ref?: ForwardedRef<ElementRef<T>>;
} & {
    as?: T;
    children?: ReactNode;
    className?: string;
    fullWidth?: boolean;
    variant?: 'outlined' | 'primary' | 'secondary' | 'text';
} & import("react").PropsWithoutRef<import("react").ComponentProps<T>> & Omit<import("react").PropsWithoutRef<import("react").ComponentProps<T>>, "as" | "children" | "className" | "fullWidth" | "variant" | keyof import("react").PropsWithoutRef<import("react").ComponentProps<T>>>) => ReturnType<typeof ButtonPolymorph>;
