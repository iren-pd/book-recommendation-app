import { HomePage } from '../pages/HomePage';
// import BookPage from '../pages/BookPage'
// import ProfilePage from '../pages/ProfilePage'
// import SearchPage from '../pages/SearchPage'
// import ErrorPage from '../pages/Error'
import { RegistrationPage } from '../components/Auth/Register';
import { LoginPage } from '../components/Auth/Login';

const routes = [
    { path: '/', element: <HomePage /> },
    { path: '/registration', element: <RegistrationPage /> },
    { path: '/login', element: <LoginPage /> },
    // {path: '/book/:id', element: <BookPage />},
    // {path: '/profile', element: <ProfilePage />},
    // {path: '/search', element: <SearchPage />},
    // {path: '*', element: <ErrorPage />},
];

export default routes;
