// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import AuthProvider from './context/AuthProvider.jsx'


// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   </BrowserRouter>

// )

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';
import { BookProvider } from './context/BookProvider.jsx'; // ✅ Import BookProvider

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <AuthProvider>
        <BookProvider> {/* ✅ Wrap App with BookProvider */}
          <App />
        </BookProvider>
      </AuthProvider>
    </BrowserRouter>

);

