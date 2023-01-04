import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/login', element: <Login /> },
        ],
    },
]);
