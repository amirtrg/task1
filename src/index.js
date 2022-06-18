import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './components/Layout/Layout'
import AddFormPage from './pages/AddFormPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="addusers" element={<AddFormPage/>} />
        <Route path="addproduct" element={<AddFormPage/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

