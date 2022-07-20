import './App.css';

import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';


function App({ Component }) {
  return (
    <div>
      <Home></Home>
      {/* <NextUIProvider>
        <Component />
      </NextUIProvider> */}
    </div>
  );
}

export default App;
