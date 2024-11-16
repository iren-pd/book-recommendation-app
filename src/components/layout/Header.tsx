import logo from '@recobook/assets/images/logo-recobook.svg';
import { Button } from '@recobook/components/ui/Button';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const Header: FC = () => {
    const location = useLocation();
    const isAuth = ['/login', '/registration'].includes(location.pathname);

    return (
        !isAuth && (
            <header className="bg-green-300 text-white shadow-lg py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <a href="/" className="hover:text-green-300">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-[50px] h-[50px]"
                        />
                    </a>

                    <Button
                        text="Выйти"
                        className="bg-red-500 hover:bg-red-700 text-white py-2"
                    />
                </div>
            </header>
        )
    );
};
