import { SVG_NS, PROPIEDADES, PaddleProperties } from '../settings'


export default class Paddle {

    constructor(height, width, paddleHeight, boardGap, position, up, down) {
        this.height = height;
        this.paddlewidth = width;
        this.paddleHeight = paddleHeight;
        this.boardGap = boardGap;
        this.position = position;
        this.up = up;
        this.down = down;
        this.colorPaddle = 'white';
        this.score = PROPIEDADES.score;
        this.ping = new Audio("public/sounds/pong-04.wav");


        document.addEventListener('keydown', event => {
            switch (event.key) {
                case this.up:
                    this.position = Math.max(0, this.position - PaddleProperties.speed);
                    this.colorPaddle = 'green';

                    break;
                case this.down:
                    this.position = Math.min(this.height - this.paddleHeight, this.position + PaddleProperties.speed)
                    this.colorPaddle = 'red';
                    break;
            }
        });

    }
    increaseScore(val) {

        this.score += val;
    }

    getScore() {
        return this.score;
    }

    increaseSize(){

        this.paddleHeight=100;
    }
    coordinates() {
        const leftX = this.boardGap; // distance between this paddle and the board left paddle
        const rightX = this.boardGap + this.paddlewidth; // distance between this paddle and the board Right paddle
        const topY = this.position; //top of the paddle
        const bottomY = this.position + this.paddleHeight; //paddle's bottom
        return [leftX, rightX, topY, bottomY];

    }

    render(svg) {

        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'height', this.paddleHeight);
        rect.setAttributeNS(null, 'width', this.paddlewidth);
        rect.setAttributeNS(null, 'x', this.boardGap);
        rect.setAttributeNS(null, 'y', this.position);
        rect.setAttributeNS(null, 'fill', this.colorPaddle);
        rect.setAttributeNS(null, 'up', this.up);
        rect.setAttributeNS(null, 'down', this.down);
        svg.appendChild(rect);
        // this.getWinner(player)



    }
}