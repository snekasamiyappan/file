import React, { useState, useEffect } from "react";

function HooksComponent() {
    const [count, setcount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setcount(() => count + 1);
      }, 1000);
    });
    return (
      <div className="hooks">
        <div>COUNTER is {count}</div>
        {/* <button className="btn  btn-sm btn-primary" onClick={()=> setcount(()=> count+1)}>Change Count</button> */}
      </div>
    );
  }

  export default HooksComponent;