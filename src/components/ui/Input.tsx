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
            className={`w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 placeholder-green-500 text-green-700 focus:bg-white transition-all ease-in-out duration-300 ${className}`}
        />
    );
};
