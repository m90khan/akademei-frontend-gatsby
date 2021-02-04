import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/Footer';
import GlobalStyle from './GlobalStyles';
const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Helmet
        title='Akademie | Learn Coding'
        meta={[
          {
            name: 'description',
            content:
              'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
          },
          {
            name: 'keywords',
            content:
              'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
          },
        ]}
      />
      <Header />
      {children}
      <Footer>
        Quality development bootcamps and courses on latest technologies. <br></br>
        <a href='mailto:support@khanweb.io'>Email us</a> to ask anything. ©
        {new Date().getFullYear()}
      </Footer>
    </div>
  );
};

export default Layout;
