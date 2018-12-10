import {SVG_NS, PaddleProperties, KEYS} from '../settings'

export default class Laser {

    constructor (width, height,x, fire) {

        this.width = width; //size of the board
        this.height = height; //size of the board
        this.up = fire;
        this.color ="red";
        this.top=0;
        this.bottom=0;
        this.vx = 0;
        this.xInitial = x; //saves the original position
        this.x1 = x;
        this.x2= x;
        this.value = this.top;
        this.soundExplotion = new Audio("public/sounds/pong-04.wav");
        //this.reset();
      //  console.log(this.player1.score);
}

position(player1,player2){

    if (this.xInitial === PaddleProperties.boardGap) {
       
   const [left,right,top,bottom] =  player1.coordinates();
   this.top  = top + 20;
   this.bottom = bottom -20;

    } else {
        
        const [left,right,top,bottom] =  player2.coordinates();
   this.top  = top + 20;
   this.bottom = bottom -20;

    }
       
}

reset(player1,player2){

    this.x1 =this.xInitial;
    this.x2 =this.xInitial;
    this.vx = 0;

    if (this.xInitial === PaddleProperties.boardGap) {
    player1.increaseScore(1);}
    else {player2.increaseScore(1);}
  }


movement(){
     
    if (this.xInitial === PaddleProperties.boardGap){
        document.addEventListener('keydown', event => {
            switch(event.key){
                case (this.up):
                this.x1 = this.xInitial;
            this.x2 = this.xInitial + 5;
            this.vx = 1;
            break;
            }
			});

    } else {

        document.addEventListener('keydown', event => {
            switch(event.key){
                case (this.up):
                
                this.x1 = this.xInitial;
            this.x2 = this.xInitial - 5;
            this.vx = -1;
            break;
            }
			});
   }}

collision(svg,ball1,ball2,ball3,player1,player2){
    
    ball1.y=Math.floor(ball1.y);
    ball1.x= Math.floor(ball1.x);
    ball2.y=Math.floor(ball2.y);
    ball2.x= Math.floor(ball2.x);
    ball3.y=Math.floor(ball3.y);
    ball3.x= Math.floor(ball3.x);
    const increase_area = 2;

    if(this.x2-ball1.radius-increase_area<=ball1.x
        &&(this.x2+ball1.radius+increase_area)>=ball1.x
        &&this.top-ball1.radius-increase_area<=ball1.y&&this.top+ball1.radius+increase_area>=ball1.y){
        ball1.reset();
        this.soundExplotion.play();
        this.reset(player1,player2);

               }

else if(this.x2-ball2.radius-increase_area<=ball2.x
    &&(this.x2+ball2.radius+increase_area)>=ball2.x
    &&this.top-ball2.radius-increase_area<=ball2.y&&this.top+ball2.radius+increase_area>=ball2.y){
    ball2.reset();
    this.soundExplotion.play();
    this.reset(player1,player2);
    }

    else if(this.x2-ball3.radius-increase_area<=ball3.x
        &&(this.x2+ball3.radius+increase_area)>=ball3.x
        &&this.top-ball3.radius-increase_area<=ball3.y&&this.top+ball3.radius+increase_area>=ball3.y){
        ball3.reset();
        this.soundExplotion.play();
        this.reset(player1,player2);
        }


}

render(svg, player1, player2, ball1,ball2,ball3){
        let line =document.createElementNS(SVG_NS,'line');
        line.setAttributeNS(null, 'x1',this.x1);
        line.setAttributeNS(null, 'x2',this.x2);
        line.setAttributeNS(null, 'y1',this.top);
        line.setAttributeNS(null, 'y2',this.top);
        line.setAttributeNS(null, 'stroke',this.color);
      


        let line2 =document.createElementNS(SVG_NS,'line');
        line2.setAttributeNS(null, 'x1',this.x1);
        line2.setAttributeNS(null, 'x2',this.x2);
        line2.setAttributeNS(null, 'y1',this.bottom);
        line2.setAttributeNS(null, 'y2',this.bottom);
        line2.setAttributeNS(null, 'stroke',this.color);
       this.movement();
        this.x1 += this.vx;
        this.x2 += this.vx;
        this.collision(svg,ball1,ball2,ball3,player1,player2);
        svg.appendChild(line);
        svg.appendChild(line2);
         this.position(player1,player2);
 
      
    }
}