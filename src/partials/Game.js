/* with this we are importing the variable from setting*/
import {SVG_NS, KEYS , PROPIEDADES} from '../settings'
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.pause = false;


		//paddle instruction 

		


		// Other code goes here...
		this.gameElement = document.getElementById(this.element);
		//initializa other objects here
		//initializa Board

		this.board = new Board(this.width, this.height);

		//initializa paddles 

		this.player1 = new Paddle(
			this.height,
			PROPIEDADES.paddleWidth,
			PROPIEDADES.paddleHeight,
			PROPIEDADES.boardGap,
			((this.height - PROPIEDADES.paddleHeight) / 2),
			KEYS.p1Up,
			KEYS.p1Down);

		this.player2 = new Paddle(
			this.height,
			PROPIEDADES.paddleWidth,
			PROPIEDADES.paddleHeight,
			(this.width - PROPIEDADES.boardGap - PROPIEDADES.paddleWidth),
			((this.height - PROPIEDADES.paddleHeight) / 2),
			KEYS.p2Up,
			KEYS.p2Down);

		//initializa ball

		this.ballGame = new Ball(
			PROPIEDADES.ballRadius,
			this.width,
			this.height,
		);

 
			document.addEventListener('keydown', event => {
				switch(event.key){
					case KEYS.spaceBar:
					this.pause=!this.pause;
					break;
				}
			});

	}

	render() {
		// More code goes here...

		if(this.pause) {
			return;
		} else{
		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);
		this.player1.render(svg);
		this.player2.render(svg);
		this.ballGame.render(svg, this.player1 , this.player2);
		}
	}

}