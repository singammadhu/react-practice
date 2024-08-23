import React,{useState} from 'react';
import './styles.css'
import data from './data';
//single selection
export default function Accordian() {

    const [selected,setSelected]=useState(null);
     const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection=(getCurrentId)=>{//
     setSelected(getCurrentId===selected ? null :getCurrentId );

    }

    const handleMultiSelection=(getCurrentId)=>{
      let cpyMutiple=[...multiple];
      const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
      
       if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
       else cpyMutiple.splice(findIndexOfCurrentId, 1);
       setMultiple(cpyMutiple);

    }
    return (
    <div className="wrapper" >
     <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
     <div className="accordion">
        {
            data && data.length>0 ? 
             data.map(dataItem=>
             <div className='item' >
                <div className='title' onClick={enableMultiSelection ? ()=>handleMultiSelection(dataItem.id) :()=>handleSingleSelection(dataItem.id)} >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                </div>
                {
                  selected=== dataItem.id || multiple.indexOf(dataItem.id)!==-1?
                  <div className='content'>{dataItem.answer}</div> : null
                }
             </div>)
            : <div>No data Found</div>
        }
     </div>

    </div>)
}
