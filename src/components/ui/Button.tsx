type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
  };

export const Button: React.FC<ButtonProps> = ({ text, onClick, className = '' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        >
            {text}
        </button>
    );
};
