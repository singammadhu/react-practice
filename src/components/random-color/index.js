
import React,{useState} from "react";
export default function  RandomColor() {
     
    const [typeOfColor,setTypeOfColor]=useState('hex');
  const [color, setColor] = useState("#000000");

  const randomColorUtility=(length)=>{//randomIndex
    return Math.floor(Math.random()*length)
  }
  const handleCreateRandomHexColor=()=>{
    let hexColor="#";
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for(let i=0;i<6;i++){
        hexColor+=hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  const handleCreateRandomRgbColor=()=>{
   const r=Math.floor(Math.random()*256);
   const g=Math.floor(Math.random()*256);
   const b=Math.floor(Math.random()*256);
   setColor(`rgb(${r},${g},${b})`);
  }

    return<div className="container"
    style={{
        width: '100vw',
        height: '100vh',
        backgroundColor:color
    }}
    >
        <button onClick={()=>setTypeOfColor("hex")}>Create HXE color</button>
        <button onClick={()=>setTypeOfColor("rgb")}>Create Rgb color</button>
    <button
    onClick={()=> typeOfColor==='hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor()}
    >Generate Random color</button>
    <div>
        <h3>{typeOfColor ==='rgb' ? 'RGB Color':'Hex color'}</h3>
        <h1>{color}</h1>
    </div>
    </div>
    
}