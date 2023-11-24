// import { useState } from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipComponent({position}){

    return (<>

<OverlayTrigger 
      className="tooltip"
      placement={position}
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip id={`tooltip-${position}`}>
        Thanks for Hovering, I am a Tooltip.
      </Tooltip>
      }
    >
      <Button variant="success">Hover me to see</Button>
    </OverlayTrigger>
  
    
    </>);

}
export default TooltipComponent;