import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';
import About from './components/About';
import Biography from './components/Biography';


function App({ Component }) {
  return (
    <div>
      <Home></Home>
      <div className='biography'>
          <Biography></Biography>
        </div>
      {/* <NextUIProvider>
        <Component />
      </NextUIProvider> */}
    </div>
  );
}

export default App;
