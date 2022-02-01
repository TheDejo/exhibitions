import React from 'react';

interface IProps {
    name: string;
    icon?: JSX.Element;
    className: string;
    onClick?: () => void;
}

const Button: React.FC<IProps> = ({ icon, name, className, onClick }: IProps) => {
    return (
        <button className={className} onClick={onClick}>
            {name}
            {icon}
        </button>
    );
};

Button.defaultProps = {
    icon: undefined,
};

export default Button;
