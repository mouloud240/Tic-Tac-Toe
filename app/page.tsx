"use client"
import Cell from "@/Components/Cell";
import { useEffect, useState } from "react";
const Home=()=>{
  const [cell,setcell]=useState(["","","","","","","","",""])
  const[turn,setTurn]=useState("X")
  const winpositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8]
  ]
  const [winner,setwinner]=useState("")

  useEffect(()=>{
    {winpositions.forEach((combo)=>{
      const circlewin=combo.every((pos)=>cell[pos]==="O" )
      const xwin=combo.every((pos)=>cell[pos]==="X" )
      if (circlewin)
      {
        setwinner("O wins")
    }
      else if (xwin){
        setwinner("X wins")
    } 
    })}
  },[turn])
  let draw=false
  useEffect(()=>{
     draw=(cell.every((c)=>c!=="")&&!winner)
    if(draw){
      setwinner("It is a draw")
    }
  },[turn])
  return (
    <>
    <div className="flex flex-col justify-center h-[100vh] items-center">
     <div className="flex w-[300px] h-[300px] border-2 border-black">
      <div className=" grid grid-cols-3">
        {cell.map((item,index)=>{
          return(  
                  <Cell
              key={index}
              item={item}
              setter={setcell}
              turn={turn}
              cell={cell}
              SetterTurn={setTurn}
              index={index}
              winner={winner} 
              />     
          )
        }
        )}
        </div>
    </div>
    {(!winner&&!draw)&& <h1 className="mt-2 text-bold text-lg">
      It is {turn} Turn's </h1>}
    <h1 className={`mt-2 text-bold text-lg ${winner[0]}`}>{winner}</h1>
    </div>
    </>
  )
}
export default Home;