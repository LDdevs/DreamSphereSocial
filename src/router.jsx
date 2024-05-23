import { createBrowserRouter } from 'react-router-dom'
import Dashboard from './routes/Dashboard.jsx'
import Contact from './routes/Contact.jsx'
import App from './App.jsx'
import Featured from './routes/Featured.jsx';
import Login from './routes/Login.jsx';

export const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/Featured', element: <Featured />},
    {path: '/dashboard', element: <Dashboard />},
    {path: '/contact', element: <Contact />},
    {path: '/Login', element: <Login />}
  ]);