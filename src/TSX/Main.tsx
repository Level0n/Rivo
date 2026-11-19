import type { JSX } from 'react';
import Best from './Main/Best';
import Products from './Main/Products';
import Exclusive from './Main/Exclusive';
import Designer from './Main/Designer';
import Feedback from './Main/Feedback';


function Main(): JSX.Element {
  return (
    <main>
      <Best />
      <Products />
      <Exclusive />
      <Designer />
      <Feedback />
    </main>
  )
}

export default Main;