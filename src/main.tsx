import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserProvider } from './context/userContext.tsx'
import App from './App.tsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <App />
      <ToastContainer />
    </UserProvider>
  </StrictMode>,
)
