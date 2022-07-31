import React from 'react';
import GlobalStyles from '../styles/global';
import { Container } from '../styles/utils';
import Footer from './Footer';
import Map from './Map';
import Navbar from './Navbar';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Navbar />
      <Map />
      <Footer />
    </Container>
  );
}

export default App;
