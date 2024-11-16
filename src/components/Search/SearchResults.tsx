import { BookSearchCard } from '@recobook/components/Book/BookSearchCard';

type BookSearchCardProps = {
    id?: string;
    title: string;
    autor: string;
    date: string;
    about: string;
};

export const SearchResults = () => {
    const booksList: BookSearchCardProps[] = [];

    // const booksList: Book[] = [
    //     {
    //         id: '1',
    //         title: 'Властелин колец',
    //         author: 'Дж. Р. Р. Толкин',
    //         date: '1954',
    //         about: 'Эпическая фэнтези-сага о путешествии храброго хоббита Фродо Бэггинса и его спутников, чтобы уничтожить могущественное кольцо.',
    //     },
    //     {
    //         id: '2',
    //         title: '1984',
    //         author: 'Джордж Оруэлл',
    //         date: '1949',
    //         about: 'Дистопический роман о тоталитарном государстве, контролирующем все аспекты жизни граждан и использующем "новояз" для подавления свободы мысли.',
    //     },
    //     {
    //         id: '3',
    //         title: 'Убить пересмешника',
    //         author: 'Харпер Ли',
    //         date: '1960',
    //         about: 'Роман о расовой несправедливости на Юге США через глаза девочки, чье детство и воспитание изменяются после судебного разбирательства.',
    //     },
    //     {
    //         id: '4',
    //         title: 'Мастер и Маргарита',
    //         author: 'Михаил Булгаков',
    //         date: '1967',
    //         about: 'Роман о мистических и философских событиях в Москве, на фоне которых разворачиваются события любви, вины и искупления.',
    //     },
    //     {
    //         id: '5',
    //         title: 'Гарри Поттер и философский камень',
    //         author: 'Дж. К. Роулинг',
    //         date: '1997',
    //         about: 'История о юном волшебнике, который отправляется учиться в школу магии и волшебства, где сталкивается с новыми друзьями и темной силой.',
    //     },
    // ];


    return !booksList.length ? (
        <p className="mt-10 text-center text-2xl text-bold text-green-500 mt-10">Ничего не найдено!</p>
    ) : (
        <div className="mt-6 flex flex-wrap justify-center">
            {booksList.map((book) => (
                <BookSearchCard book={book} />
            ))}
        </div>
    );
};
