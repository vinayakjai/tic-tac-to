import { useState } from "react";
import Card from "../card/Card";
import isWinner from "../helper/checkWinner";
import './grid.css'
function Grid({numberofCards}){
    const [board,setBoard]=useState(Array(numberofCards).fill(""));
    const [turn,setTurn]=useState(true)
    const [winner,setWinner]=useState(null);
    function play(index){
       if(turn==true){
        board[index]="O";
       }else{
        board[index]="X";
       }
       const win=isWinner(board,turn ? "O":"X")
    
       if(win){
        
         setWinner(win)
       }
       setBoard([...board]);
       setTurn(!turn);
    }

    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberofCards).fill(""))
    }
    return (
      
       
       <div className="grid-wrapper">
       
       {
            winner && (
                <>
                <h1 className="turn-highlight">winner is {winner}</h1>
                <button className="reset-game" onClick={reset}>reset</button>
                </>
            )
        }
       
         <h1 className="turn-highlight">currunt turn is:{
            (turn)?'O':'X'
         
         
         
          }</h1>
         <div className="grid">
             {board.map((el,idx)=><Card gameEnd={winner?true:false} key={idx} onPlay={play} player={el} index={idx} />)}
        </div>
       </div>
      
    );

}
export default Grid;