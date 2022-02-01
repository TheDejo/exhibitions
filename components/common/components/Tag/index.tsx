import React from 'react';

interface IProps {
    children: JSX.Element;
    color?: 'yellow' | 'green';
}

const Tag: React.FC<IProps> = ({ color, children }: IProps) => {
    return (
        <div
            className={`${
                color === 'yellow'
                    ? 'bg-yellow border text-yellow bg-opacity-5 border-yellow rounded-md py-2 px-4 w-64 '
                    : 'bg-green border text-green bg-opacity-5 border-green rounded-md py-2 px-4 w-64'
            }`}
        >
            {children}
        </div>
    );
};

Tag.defaultProps = {
    color: 'yellow',
};

export default Tag;
