import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/login', element: <LoginPage /> },
        ],
    },
]);
