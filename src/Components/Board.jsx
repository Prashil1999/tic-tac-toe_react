import React from "react";
import Row from "./Row";
export default function Board(){
	let dimension=3;

	let [board,setBoard]=React.useState(new Array(dimension).fill("").map(()=>new Array(dimension).fill("")));
	let [turn,setTurn]=React.useState("O");
	let [information,setInformation]=React.useState("O's turn");

	function handleCellClick(id){
		if(isGameOver()===true){
			return;
		}
		let boardCopy=[...board];
		if(boardCopy[id[0]][id[1]]===""){
			boardCopy[id[0]][id[1]]=turn;
		}else{
			return;
		}
		setBoard(boardCopy);
		turn==="O"?setTurn("X"):setTurn("O");
		setInformation((turn==="O"?"X":"O")+"'s turn");
		if(isGameOver()){
			setInformation(turn+" wins");
			//gameover=true;
		}
		let cnt=0;
		for (let i = 0; i < dimension; i++) {
			for (let j = 0; j < dimension; j++) {
						if(board[i][j]!==""){
							cnt++;
						}								
			}
		}
		if(cnt==dimension*dimension){
			setInformation("Match Draw ");
		}
	};

	function isGameOver(){
	  let cnt = 0;
	  let tmp = "";
	  //row check
	  for (let i = 0; i < dimension; i++) {
	    tmp = board[i][0];
	    cnt = 0;
	    for (let j = 1; j < dimension; j++) {
	      if (board[i][j] != "" && board[i][j] === tmp) {
	        cnt++;
	      }
	    }

	    if (cnt === +dimension - 1) return true;
	  }
	  //col check
	  for (let i = 0; i < dimension; i++) {
	    tmp = board[0][i];
	    cnt = 0;
	    for (let j = 1; j < dimension; j++) {
	      if (board[j][i] != "" && board[j][i] === tmp) {
	        cnt++;
	      }
	    }

	    if (cnt === +dimension - 1) return true;
	  }
	  //diagonal check
	  cnt = 0;
	  tmp=board[0][0];
	  for (let j = 0; j < dimension; j++) {
	    if (board[j][j] != "" && board[j][j] === tmp) {
	      cnt++;
	    }
	  }
	  console.log("diagonal" + cnt);
	  if (cnt === +dimension) return true;

	  tmp = board[0][dimension - 1];
	  cnt = 0;
	  let i = 1;
	  for (let j = dimension - 2; j >= 0; j--) {
	    if (board[i][j] != "" && board[i][j] === tmp) {
	      cnt++;
	    }
	    i++;
	  }

	  if (cnt === +dimension - 1) return true;

	  return false;
	}

	return(<>
			<h1>{information}</h1>
			<div className="board">
				{board.map((el,index)=>
				<Row key={index} dimension={dimension} id={index} onCellClick={handleCellClick} row={board[index]} />)}
			</div>
		</>);
}