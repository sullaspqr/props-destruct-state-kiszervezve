import { useState } from 'react';
import './App.css';
import { Hello } from './Hello';
import { BoxComponent } from './BoxComponent';
export const App = () => {
const [valami] = useState(1); // ez itt speciális state, csak getterrel!
  return (
    <>
     <h1>Hello World!</h1>
     <Hello name="András" age={30} x={valami} />
     <div className="border">
      Dobozok App
      <BoxComponent kiindulo = {2} szin="green" />
      <BoxComponent kiindulo = {3} szin="red" />
      <BoxComponent kiindulo = {7} szin="blue" />
     </div>
    </>
  )
}


