import React from "react";
export default function Cell(props){
	return(<>
			<div id={props.id} className="cell" onClick={()=>props.handleClick(props.id)}>{props.cell}</div>
		</>);
}