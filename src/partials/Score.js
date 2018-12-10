import {SVG_NS} from '../settings'



export default class Score{
    constructor(x, y) {
    this.x = x;
    this.y = y;
    
  }

    render(svg,score){
   
        let text = document.createElementNS(SVG_NS, 'text');
		text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
       text.setAttributeNS(null, 'fill','white');
       text.setAttributeNS(null,'font-size',20);
       text.setAttributeNS(null,'font-family','"Silkscreen web", monotype');
        text.textContent = score;
        svg.appendChild(text);

    }
}