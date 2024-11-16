import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const Footer: FC = () => {
    const location = useLocation();
    const isAuth = ['/login', '/registration'].includes(location.pathname);

    return (
        !isAuth && (
            <footer className="bg-green-800 text-white shadow-lg py-3 bg-cover bg-center">
                <p className="container mx-auto flex justify-center font-bold">
                    RecoBook
                </p>
            </footer>
        )
    );
};
