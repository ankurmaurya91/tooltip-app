

import { useState } from 'react';
import TooltipComponent from './TooltipComponent';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function App() {
  const[position,setPostion]=useState("left");

  const handleButtonclick=(value)=>{

    setPostion(value);
  }
  return (
    <div className="App">
      <TooltipComponent position={position}/>
      <ButtonGroup aria-label="Button group" id="buttons">
      <Button variant="primary"  onClick={()=>handleButtonclick("left")}>Left</Button>
      <Button variant="secondary"  onClick={()=>handleButtonclick("top")}>Top</Button>
      <Button variant="success" onClick={()=>handleButtonclick("bottom")}>Bottom</Button>
      <Button variant="warning"  onClick={()=>handleButtonclick("right")}>Right</Button>
    </ButtonGroup>
    </div>
  );
}

export default App;
