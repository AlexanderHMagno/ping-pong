import {SVG_NS, PROPIEDADES} from '../settings'

export default class Ball {

    constructor (radius, width, height,color,value) {

        this.radius = radius;
        this.width = width; //size of the board
        this.height = height; //size of the board
        this.color = color;
        this.colorReset = color;
        this.value= value;
        this.ping = new Audio("public/sounds/pong-01.wav");
        
        this.reset();
        
}

    reset() {
        
        this.color= this.colorReset;
        this.x = (this.width/2); //position x of the ball
        this.y = this.height/2; // position Y of the ball

        // vy is the special additional effect that we can create for moving the ball
        this.vy=0;
        while(this.vy===0){
            this.vy = Math.floor(Math.random() * 10 - 5);}
        
        this.vx = PROPIEDADES.ballDirection * (6 - Math.abs(this.vy));
        
        
    }

    wallCollision(){

        const hitLeft = (this.x - PROPIEDADES.ballRadius <= 0) ;
        const hitRight = (this.x + PROPIEDADES.ballRadius>= this.width) ;
        const hitTop =(this.y - PROPIEDADES.ballRadius <=0);
        
        const hitBottom =  (this.y + PROPIEDADES.ballRadius>= this.height);
        if(hitTop||hitBottom){
            this.vy*= -1;
        }else if(hitLeft||hitRight){
           
        }
    } 

    paddleCollision(player1,player2){

        if(this.vx>0){
       const [left,right,top,bottom] =  player2.coordinates();
       const hit = (this.x + this.radius >=left)
       &&(this.y <=bottom)
       &&(this.y >= top);
        if(hit){
        //if the paddle touches the ball at the corner it will affect differently. 
            if((this.y <=bottom-5)&&(this.y >= top+5)){
                this.vx*= -1;
                this.color = "gold";
                
            } else {
                this.vx*= -1 * Math.max(1,(Math.random() * 2)) ;
                this.vy*=-1;
                this.colorBall();
                }

            this.ping.play();

            
        }
        } else {
        const [left,right,top,bottom] =  player1.coordinates();
        const hit = (this.x - this.radius <= right)
        &&(this.y <=bottom)
        &&(this.y >= top);
         if(hit){
            if((this.y <=bottom-5)&&(this.y >= top+5)){
                this.vx*= -1;
                this.color = "gold";
                
            } else {
                this.vx*= -1 * Math.max(1,(Math.random() * 2)) ;
                this.vy*=-1;
                this.colorBall();
                }

            this.ping.play();
        }
    }
    }

    checkScore(player1,player2){

       /* console.log(player1.score,"PLAYER1");
        console.log(player2.score,"PLAYER2");*/
        const hitLeft = (this.x - PROPIEDADES.ballRadius <= 0) ;
        const hitRight = (this.x + PROPIEDADES.ballRadius>= this.width) ;
        
        if(hitLeft){
            player2.increaseScore(this.value);
            this.reset();
            PROPIEDADES.ballDirection*= -1;

        }else if (hitRight){
            player1.increaseScore(this.value);
            this.reset();
            PROPIEDADES.ballDirection*= -1;
        }

    }

    colorBall(){
         
        var paleta = ["#c03dc0","#800080","#f594f5"];
        var paletaColor = paleta[Math.floor(Math.random()*(paleta.length))]
        this.color = paletaColor;


       
        
    }

    render(svg, player1, player2){
        let circle =document.createElementNS(SVG_NS,'circle');
        circle.setAttributeNS(null, 'cx',this.x);
        circle.setAttributeNS(null, 'cy',this.y);
        circle.setAttributeNS(null, 'r',this.radius);
        circle.setAttributeNS(null, 'fill',this.color);
        this.x += this.vx;
        this.y += this.vy;
        svg.appendChild(circle);
        this.wallCollision();
        this.paddleCollision(player1,player2);
        this.checkScore(player1, player2);
       // this.colorBall();
    }
}