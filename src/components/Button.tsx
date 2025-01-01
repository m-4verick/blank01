import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps {
    children: ReactNode;
    className?: string; // 외부에서 추가 클래스 정의
}

const Button: React.FC<ButtonProps> = ({ children, className }) => {
    return (
        <button
            className={clsx(
                "rounded-lg bg-zinc-950 text-zinc-50 font-medium px-4 py-2 hover:bg-zinc-700 transition",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
