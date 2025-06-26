import React from 'react';
import { Routes } from './src/routes';
import { CartProvider } from './src/context';

const App = () => {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  )
}

export default App;
