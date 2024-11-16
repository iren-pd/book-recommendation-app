import React from 'react';

type SearchInputProps = {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
    value,
    onChange,
}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Введите запрос..."
            className="w-2/3 px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 bg-green-50 placeholder-green-500 text-green-700 focus:bg-white transition-all ease-in-out duration-300"
        />
    );
};
