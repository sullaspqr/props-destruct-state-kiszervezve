import { useState } from 'react';
export const BoxComponent = ({kiindulo,szin}) => {
    // hagyományos state: getter, setter és kiinduló állapottal
 const [getSzamlalo, setSzamlalo] = useState(kiindulo);
 return (
  <div 
  style={{
    width: "200px",
    height: "200px",
    backgroundColor: szin,
  }} className="p-4 m-4 rounded"
  onClick={() => {
    setSzamlalo(getSzamlalo + 1);
  }}
  ><br/><br/>
    <h1>{getSzamlalo}</h1>
  </div>
 )
}