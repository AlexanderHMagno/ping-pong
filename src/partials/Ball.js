import {SVG_NS, PROPIEDADES} from '../settings'

export default class Ball {

    constructor (radius, width, height) {

        this.radius = radius;
        this.width = width;
        this.height = height;
        this.reset();
        
        

        
        

    }

    reset() {
        
    
        this.x = (this.width/2);
        this.y = this.height/2;
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
            this.vx*= -1;
        }
    }



    

    render (svg){
       
        let circle =document.createElementNS(SVG_NS,'circle');
        circle.setAttributeNS(null, 'cx',this.x);
        circle.setAttributeNS(null, 'cy',this.y);
        circle.setAttributeNS(null, 'r',this.radius);
        circle.setAttributeNS(null, 'fill','white');
        this.x += this.vx;
        this.y += this.vy;
               
        svg.appendChild(circle);
        this.wallCollision();
    }
}