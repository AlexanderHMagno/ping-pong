import {SVG_NS, PROPIEDADES} from '../settings'

export default class Ball {

    constructor (radius, width, height,color,value) {

        this.radius = radius;
        this.width = width;
        this.height = height;
        this.color = color;
        this.value= value;
        this.ping = new Audio("public/sounds/pong-01.wav");
        this.ballStart = new Audio("public/sounds/balllauncher.mp3");
        this.reset();
        
}

    reset() {
        
    
        this.x = (this.width/2);
        this.y = this.height/2;
        this.vy=0;
        while(this.vy===0){
            this.vy = Math.floor(Math.random() * 10 - 5);}
        
        this.vx = PROPIEDADES.ballDirection * (6 - Math.abs(this.vy));
        this.ballStart.play();
        
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
            
            this.vx*= -1;
            this.ping.play();
        }

        } else {
        const [left,right,top,bottom] =  player1.coordinates();
        const hit = (this.x - this.radius <= right)
        &&(this.y <=bottom)
        &&(this.y >= top);
         if(hit){
             this.vx*= -1;
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
         
        var paleta = ["green","red"];
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