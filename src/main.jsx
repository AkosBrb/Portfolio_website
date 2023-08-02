import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
