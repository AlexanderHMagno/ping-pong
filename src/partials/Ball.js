import {SVG_NS} from '../settings'

export default class Ball {

    constructor (radius, width, height) {

        this.radius = radius;
        this.width = width;
        this.height = height;
        this.reset();
    }

    reset() {
        this.x = this.width/2;
        this.y = this.height/2;
    }

    render (svg){

        let circle =document.createElementNS(SVG_NS,"circle");
        circle.setAttributeNS(null, "cx",this.x);
        circle.setAttributeNS(null, "cy",this.y);
        circle.setAttributeNS(null, "r",this.radius);
        circle.setAttributeNS(null, "fill","white");
        
        svg.appendChild(circle);
    }
}