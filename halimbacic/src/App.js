import logo from './logo.svg';
import './App.css';

import { NextUIProvider } from '@nextui-org/react';

function App({Component}) {
  return (
    <NextUIProvider>
      <Component />
    </NextUIProvider>
  );
}

export default App;
