import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const Footer: FC = () => {
    const location = useLocation();
    const isAuth = ['/login', '/registration'].includes(location.pathname);

    return (
        !isAuth && (
            <footer>
                <div className="w-full max-w-5xl px-4">Footer</div>
            </footer>
        )
    );
};
