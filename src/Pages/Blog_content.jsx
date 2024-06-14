import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import LoadingSpinner from './LoadingSpinner';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Blog_pg from '../Components/Blog/Content_pg/Content_pg.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import './pages.css';

function Blog_content({ id }) {
  return (
    <>
      <Navbar />
      <Header />
      <Blog_pg data={id} />
      <Footer />
    </>
  );
}

export default Blog_content;
