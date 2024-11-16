import AppRouter from '@recobook/routes/AppRouter';
import { FC } from 'react';

export const Main: FC = () => {
    return (
        <main className="flex justify-center py-8">
            <div className="container mx-auto w-full max-w-3xl">
                <AppRouter />
            </div>
        </main>
    );
};
