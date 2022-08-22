import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';
import About from './components/About';
import Biography from './components/Biography';
import Contacts from './components/Contacts';


function App({ Component }) {
  return (
    <div>
      <Home></Home>
      <div className='biography'>
        <Biography></Biography>
      </div>
      <div className='contacts'>
        <Contacts></Contacts>
      </div>
      {/* <NextUIProvider>
        <Component />
      </NextUIProvider> */}
    </div>
  );
}

export default App;
