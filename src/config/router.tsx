import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout';
import HomaPage from '@/pages/HomaPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomaPage />,
            },
        ],
    },
]);

export default router;
