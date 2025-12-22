import React, { Children } from 'react';
import Header from '../Header/Header.jsx';
import LowerHeader from '../Header/LowerHeader';

function LayOut({children}) {
  return (
    <div>
     <Header/>
    {children}

   </div>
  )
}

export default LayOut;
