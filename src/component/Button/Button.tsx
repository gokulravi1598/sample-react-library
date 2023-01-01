import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export interface ModeButtonProps {
    //outline?: boolean;
    outline: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';
    size?: 'lg' | 'sm';
    label: string;
    disable?: boolean;
    link?: boolean;
    onClick?: () => void;
    backgroundColor?: string;
    color?: string;
}

export const ModeButton = ({ outline, size, label, backgroundColor, color, disable, ...props }
    : ModeButtonProps) => {
    //const outlineMode = outline ? 'btn-outline-success' : 'btn-outline-warning';
    //const disabledButton
    var outlineMode = "";
    if (outline === 'primary') {
        outlineMode = 'btn-outline-primary';
    } else if (outline === 'secondary') {
        outlineMode = 'btn-outline-secondary';
    } else if (outline === 'success') {
        outlineMode = 'btn-outline-success';
        backgroundColor = '#05e614';
        color = "black";
    } else if (outline === 'danger') {
        outlineMode = 'btn-outline-danger';
        backgroundColor = "red";
        color = "black";
    } else if (outline === 'warning') {
        outlineMode = 'btn-outline-warning';
    } else if (outline === 'info') {
        outlineMode = 'btn-outline-info';
    } else if (outline === 'dark') {
        outlineMode = 'btn-outline-dark';
    }

    return (
        <button
            type="button"
            className={['btn', `btn-${size}`, outlineMode].join(' ')}
            style={{ backgroundColor, color }}
            disabled={disable}
            {...props}
        >
            {label}
        </button>
    );
};

export default ModeButton;