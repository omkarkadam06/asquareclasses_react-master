import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import LoadingSpinner from './LoadingSpinner';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header/Header';
import Blog_header from '../Components/Blog/Header/blog_header.jsx';
import Blog_pg_body from '../Components/Blog/pg_body/blog_pg_body.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import './pages.css';

function Blog() {
  return (
    <>
      <Navbar />
      <Header />
      <Blog_header />
      <Blog_pg_body />
      <Footer />
    </>
  );
}

export default Blog;
