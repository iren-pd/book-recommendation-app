type InputProps = {
    type: 'text' | 'password' | 'email';
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
};

export const Input = ({
    type,
    placeholder,
    value,
    onChange,
    className = '',
}: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        />
    );
};
