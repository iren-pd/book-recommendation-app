type ButtonProps = {
    type?: "button" | "submit" | "reset" | undefined;
    text: string;
    onClick?: () => void;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    type = 'button',
    text,
    onClick,
    className = '',
}: ButtonProps) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all ease-in-out duration-300  ${className}`}
        >
            {text}
        </button>
    );
};
