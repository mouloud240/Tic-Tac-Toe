import React, { Dispatch, SetStateAction } from 'react';
import style from "./cell.module.css"

type Cellprops = {
    item: string;
    setter: Dispatch<SetStateAction<string[]>>;
    turn: string;
    SetterTurn: Dispatch<SetStateAction<string>>
    cell: string[];
    index:number;
    winner:string

};


const Cell = ({item,setter,turn,SetterTurn,cell,index,winner}:Cellprops) => {
   let isthereawin=winner!==""
  let copycell=[...cell]
  const handleclick=()=>{
    if (!isthereawin)
    {
      if (item==="")
      {
          if(turn==="X"){
              copycell[index]="X"
              setter(copycell)
                  SetterTurn("O")
              }
              if(turn==="O"){
                  copycell[index]="O"
                  setter(copycell)
                      SetterTurn("X")
              }
      }

    }


}
  return (
    <div className="h-[100px] w-[100px] border-2 border-black flex justify-center items-center" onClick={handleclick} >
            <h1 className={`text-bold text-[100px] ${item}`}>{item}</h1>
    </div>
  )
}

export default Cell