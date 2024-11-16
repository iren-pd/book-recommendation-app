import AppRouter from '@recobook/routes/AppRouter';
import { FC } from 'react';

export const Main: FC = () => {
    return (
        <main className="flex justify-center py-8">
            <div className="w-full max-w-5xl px-4">
                <AppRouter />
            </div>
        </main>
    );
};
