import React, { useState, useEffect } from "react";

const Counter = () => {
	const [Counter, setCounter] = useState(0);
	const [action, setAction] = useState("");

	useEffect(() => {
		if (action === "inc") {
			setCounter(Counter + 1);
		} else if (action === "dec") {
			setCounter(Counter - 1);
		}
	}, [action]);

	return (
		<div
			style={{
				width: 200,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "black",
				color: "white",
			}}
		>
			<p>{Counter}</p>
			<div
				style={{
					width: "50px",
					height: "50px",
					backgroundColor: "black",
					color: "white",
					cursor: "pointer",
					margin: 10,
					border: "solid 1px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				onClick={() => setAction("inc")}
			>
				<span>+</span>
			</div>
			<div
				style={{
					width: "50px",
					height: "50px",
					backgroundColor: "black",
					color: "white",
					cursor: "pointer",
					margin: 10,
					border: "solid 1px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				onClick={() => setAction("dec")}
			>
				<span>-</span>
			</div>
		</div>
	);
};

export default Counter;
