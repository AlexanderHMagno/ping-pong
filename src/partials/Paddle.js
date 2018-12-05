import {SVG_NS} from '../settings'


export default class Paddle{ 

    constructor (height, width, paddleHeight,boardGap,position,up,down){
    this.height = height;
    this.width = width;
    this.paddleHeight = paddleHeight;
    this.boardGap = boardGap;
    this.position = position;
    this.up = up;
    this.down = down;
    this.speed = 10;
    this.score = 0;
    document.addEventListener("keydown", event => {
        switch(event.key){
            case this.up:
           
            this.position = Math.max(0, this.position - this.speed);
            break;
            case this.down:
            console.log(this.height)
            this.position = Math.min(this.height-this.paddleHeight,this.position+this.speed)
            break;
        }
      });
     
    }

    render(svg){
   
        let rect = document.createElementNS(SVG_NS, "rect");
		rect.setAttributeNS(null, "height", this.paddleHeight);
		rect.setAttributeNS(null, "width", this.width);
		rect.setAttributeNS(null, "x", this.boardGap);
        rect.setAttributeNS(null, "y", this.position);
        rect.setAttributeNS(null, "fill", "white");
		rect.setAttributeNS(null, "up", this.up);
		rect.setAttributeNS(null, "down", this.down);
       
        svg.appendChild(rect);


    }
}