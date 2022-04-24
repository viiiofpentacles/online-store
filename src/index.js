import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './styles/index.css';
import App from './App';
import Home from './Home';
import Store from './Store';
import About from './About';
import Contact from './Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path ="store" element={<Store />} />
          <Route path ="about" element={<About />} />
          <Route path ="contact" element={<Contact />} />
          <Route path ="*" element={
            <main>
              <h1>Page Not Found</h1>
              <p>Can't find what you're looking for? <Link to="/contact">Reach out to us.</Link></p>
            </main>
          }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

