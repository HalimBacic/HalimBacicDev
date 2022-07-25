import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';
import About from './components/About';


function App({ Component }) {
  return (
    <div>
      <Home></Home>
      <About></About>
      {/* <NextUIProvider>
        <Component />
      </NextUIProvider> */}
    </div>
  );
}

export default App;
