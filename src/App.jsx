import React from 'react'

import Routing from './Router.jsx';
import DataProvider from './Components/DataProvider/DataProvider.jsx'

function App() {
  return (
    <>
      <DataProvider/>
      <Routing/>
    </>
  );
}

export default App;