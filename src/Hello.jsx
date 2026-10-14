import { useState } from 'react';
// destucturingggal átvesszük a főprogramból a propsokat és
// a nevükkel tudjuk őket használni, de semmi nem tiltja, hogy
// az átvett props be lehet passzolni kiinduló state állapotnak
// egyébként a props-ok csak olvashatóak!:
export const Hello = ({name, age, x}) =>{
const [ize,setIze] = useState(x);
    return(
        <div>
            <h2> Szia {name}, te szerintem {age} éves vagy és  {ize} ! </h2>
        <button className="btn btn-success rounded" onClick={() => setIze(ize + 1)}>+</button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-danger rounded" onClick={() => setIze(ize - 1)}>-</button>
        </div>
    );
}
