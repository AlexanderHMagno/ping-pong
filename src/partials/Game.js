/* with this we are importing the variable from setting*/
import { SVG_NS, KEYS, PROPIEDADES, BallProperties, PaddleProperties } from '../settings'
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';
import Winner from './winner';
import Laser from './Laser';


export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.pause = false;

		// Other code goes here...
		this.gameElement = document.getElementById(this.element);
		//initializa other objects here
		//initializa Board

		this.board = new Board(this.width, this.height);

		//initializa paddles 

		this.player1 = new Paddle(
			this.height,
			PaddleProperties.paddleWidth,
			PaddleProperties.paddleHeight,
			PaddleProperties.boardGap,
			((this.height - PaddleProperties.paddleHeight) / 2),
			KEYS.p1Up,
			KEYS.p1Down);

		this.player2 = new Paddle(
			this.height,
			PaddleProperties.paddleWidth,
			PaddleProperties.paddleHeight,
			(this.width - PaddleProperties.boardGap - PaddleProperties.paddleWidth),
			((this.height - PaddleProperties.paddleHeight) / 2),
			KEYS.p2Up,
			KEYS.p2Down);

		//initializa ball

		this.ballGame = new Ball(
			BallProperties.ballRadius,
			this.width,
			this.height,
			"white",
			1,
		)

		this.ballGame1 = new Ball(
			BallProperties.ballRadius + 10,
			this.width,
			this.height,
			"white",
			1,
		)

		this.ballGame2 = new Ball(
			BallProperties.ballRadius + 8,
			this.width,
			this.height,
			"green",
			-1,
		)

		this.Score1 = new Score(

			this.width * 0.25,
			this.height / 3,

		)

		this.Score2 = new Score(

			this.width * 0.75,
			this.height / 3,
		)

		this.winnerGame = new Winner()

		//initializa laser

		this.laser1 = new Laser(
			this.width,
			this.height,
			PaddleProperties.boardGap,
			KEYS.p1Right,
		)

		this.laser2 = new Laser(
			this.width,
			this.height,
			(this.width),
			KEYS.p2Right,
		)

		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
			}
		});
	}

	stops() {
		this.pause = true;
		this.player1.paddleHeight = PaddleProperties.paddleHeight;
		this.player2.paddleHeight = PaddleProperties.paddleHeight;
		this.player1.score = 0;
		this.player2.score = 0;
	}

	resetGame() {
		this.stops();
	}

	render() {
		// More code goes here...
		if (this.pause) {
			return;
		} else {
			this.gameElement.innerHTML = '';
			let svg = document.createElementNS(SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
			this.gameElement.appendChild(svg);

			this.board.render(svg);
			this.player1.render(svg, this.player2);
			this.player2.render(svg, this.player1);
			this.ballGame.render(svg, this.player1, this.player2);
			this.Score1.render(svg, this.player1.getScore());
			this.Score2.render(svg, this.player2.getScore());

			// laser

			this.laser1.render(svg, this.player1, this.player2, this.ballGame, this.ballGame1, this.ballGame2);
			this.laser2.render(svg, this.player1, this.player2, this.ballGame, this.ballGame1, this.ballGame2);

			//balls creator rendering

			if (this.player1.score >= BallProperties.secondBall && this.player1.score < BallProperties.thirdBall) {
				this.ballGame1.render(svg, this.player1, this.player2);
			} else if (this.player1.score >= BallProperties.thirdBall) {
				this.ballGame2.render(svg, this.player1, this.player2);
				this.ballGame1.render(svg, this.player1, this.player2);

			}


			//declaring a winner
			if (this.player1.score >= PROPIEDADES.maxPoint || this.player2.score >= PROPIEDADES.maxPoint) {
				this.winnerGame.render(svg, this.player1.score, this.player2.score)
				this.resetGame();
			}


			// increase the size of the paddle.
			if(this.player1.score  === PROPIEDADES.maxPoint - (PROPIEDADES.maxPoint/10)){
				this.player2.increaseSize();
			} else if (this.player2.score  === PROPIEDADES.maxPoint - (PROPIEDADES.maxPoint/10)){
				this.player1.increaseSize();
			}

		}


	}

}