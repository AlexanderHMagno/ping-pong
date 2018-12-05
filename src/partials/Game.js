/* with this we are importing the variable from setting*/
import {SVG_NS, KEYS} from '../settings'
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		
		//paddle instruction 

		this.paddleWidth = 8;
		this.paddleHeight = 56; 
		this.boardGap= 10;
		this.ballRadius =8;
		
		// Other code goes here...
       this.gameElement = document.getElementById(this.element);

	 //initializa other objects here

	 //initializa Board
	 
	 this.board = new Board(this.width, this.height);

	 //initializa paddles 

	 this.player1 = new Paddle ( 
		 this.height,
		 this.paddleWidth,
		 this.paddleHeight,
		 this.boardGap,
		 ((this.height-this.paddleHeight)/2),
		 KEYS.p1Up,
		 KEYS.p1Down);
	 
     this.player2 = new Paddle ( 
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height-this.paddleHeight)/2),
			KEYS.p2Up,
			KEYS.p2Down);

	 //initializa ball

	 this.ballGame = new Ball (
		 this.ballRadius,
		 this.width,
		 this.height
	 )
	




/*		
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" 
		viewBox="0 0 512 256" width="512" height="256">

			<rect class="paddle left" x="10" y="180" width="8" height="56" stroke="#000000" stroke-width="10" />
			<rect class="paddle right" x="492" y="100" width="8" height="56" stroke="#000000" stroke-width="10" />
			<circle class="ball" cx="256" cy="128" r="8" />
			<line class="center-line" x1="256" y1="0" x2="256" y2="256" stroke="black" stroke-dasharray="15" />
		</svg>*/
	}

	render() {
		// More code goes here...
        this.gameElement.innerHTML="";
		let svg = document.createElementNS(SVG_NS, "svg");
		svg.setAttributeNS(null, "width", this.width);
		svg.setAttributeNS(null, "height", this.height);
		svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ballGame.render(svg);
		
	}

}