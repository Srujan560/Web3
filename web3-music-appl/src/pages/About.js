import React from 'react'
import styles from "../CSS/about.css"

function aboutUs() {

	const h1sty = {
		fontSize: "4vw", 
		color:"#e0d9cf"
	}
	const h2sty = {
		fontSize:"2.5vw",
		color:"#99948f"
	}
	const h3sty = {
		fontSize:"1.5vw",
		marginBottom: "5vh"
	}
    return (
		<body style={{backgroundColor:"#1b2838", height:"100vh"}}>
		<center>
			<div style={{ width: "50%", border: ".25vw solid gray", borderRadius: "5vw", marginTop: "1em" }}>
				<h1 style={h1sty}>About</h1>
				<h2 style={h2sty}>A work in progress web3 application.</h2>
				<h3 style={h3sty}>The goal of this project is to create a distributed music consumption website that runs on the principles of web3.</h3>
				<h3 style={h3sty}>Web3 is the next phase of the internet in which control is taken from large conglomerates, and handed back to the people.</h3>
				<h3 style={h3sty}>By the completion of this project, we seek to provide users with a means of purchasing, streaming, and uploading music.</h3>
				<h3 style={h3sty}>As incentive, listeners should ideally be able to pay in cryptocurrency and artists be paid in cryptocurrency to induce anonymity.</h3>
			</div>
	    	</center>
        </body>
	);
}
export default aboutUs; 