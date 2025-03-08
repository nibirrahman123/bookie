import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Root from './components/Root/Root';
import Home from './components/pages/Home';
import ListedBooks from './components/pages/ListedBooks';
import PagesToRead from './components/pages/PagesToRead';
// import '../public/books.json'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './components/pages/BookDetails';
import StoredDetails from './components/pages/listedDetails/StoredDetails';

const router = createBrowserRouter([
  {
    path: '/', element: <Root></Root>, children: [
      { path: '/', element: <Home /> },
      { path: '/listedBooks', element: <ListedBooks /> },
      { path: '/pagesToRead', element: <PagesToRead /> },
      { path: '/BookDetails/:id', element: <BookDetails /> },
      { path: '/storedDetails/:id', element: <StoredDetails /> },
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
