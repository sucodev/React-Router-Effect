import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import RouterEffect from './RouterEffect';

// Components
import Header from './Components/Header';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Post from './Pages/Post';
import NotExist from './Pages/404';

// Import Styled Components
import { GlobalStyle, Container, Content } from './Global/styles';

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Content>
          <Routes>
            <RouterEffect path="/" element={<Home />} time={600} end />
            <RouterEffect path="about" element={<About />} time={800} />
            <RouterEffect path="contact" element={<Contact />} time={500} />
            <RouterEffect path="p/:id" element={<Post />} time={500} />
            <RouterEffect path="*" element={<NotExist />} time={500} />
          </Routes>
        </Content>
      </BrowserRouter>
      <GlobalStyle />
    </Container>
  );
};

export default App;
