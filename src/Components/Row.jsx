import React from "react";
import Cell from "./Cell";
export default function Row(props){
	let arr=new Array(Number(props.dimension)).fill("");
	return(<><div className="row">{
			arr.map((el,index) => <Cell key={props.id+""+index} id={props.id+""+index} handleClick={props.onCellClick} cell={props.row[index]}/> )
		}
		</div>
		</>
		);
}