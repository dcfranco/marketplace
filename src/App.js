import React from 'react';
import NavBar from './components/NavBar';
import Section from './sections/Hero';
import Carrousel from './components/Carrousel';
import NumbersSection from './sections/Numbers';
import HowMuch from './sections/HowMuch';
import WhatYouNeedSection from './sections/WhatYouNeed';
import MidiaSection from './sections/Midia';
import CarrouselIntegrated from './components/Carrousel/Integrated';
import FaqSection from './sections/Faq';
import Footer from './components/Footer';
import { MenuProvider } from './context/Menu';

function App() {
  return (
    <MenuProvider>
      <NavBar />
      <Section />
      <Carrousel />
      <NumbersSection />
      <HowMuch />
      <WhatYouNeedSection />
      <MidiaSection />
      <CarrouselIntegrated />
      <FaqSection />
      <Footer />
    </MenuProvider>
  );
}

export default App;
