import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { appRouter } from './router';
import './lang/lang.config';
import './index.css'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)
