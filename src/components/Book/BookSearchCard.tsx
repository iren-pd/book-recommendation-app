import { Button } from '@recobook/components/ui/Button';
import { FC } from 'react';

type BookSearchCardProps = {
    id?: string;
    title: string;
    author: string;
    date: string;
    about: string;
};

export const BookSearchCard: FC<BookSearchCardProps> = ({ book }) => {
    return (
        <div className="w-full bg-green-100 shadow-lg rounded-lg p-6 mb-6 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold text-green-600">
                   {book.id}. {book.title}
                </h3>
                <p className="text-lg text-gray-700">
                    <span className="font-semibold">{book.author}</span>
                    <span className="text-gray-500 ml-2">{book.date}</span>
                </p>
                <p className="text-gray-600">{book.about}</p>
            </div>
            <Button text="Читать больше..." />
        </div>
    );
};
