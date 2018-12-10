import { SVG_NS, WinnerValues, PROPIEDADES } from '../settings'



export default class Winner {
    constructor(x, y) {
        this.x = WinnerValues.Height;
        this.y = WinnerValues.Width;
        this.pingp1 = new Audio("public/sounds/player1.mp3");
        this.pingp2 = new Audio("public/sounds/player2.mp3");

    }


    render(svg, score1, score2) {


        let rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttributeNS(null, 'x', 80);
        rect.setAttributeNS(null, 'y', 100);
        rect.setAttributeNS(null, 'width', 350);
        rect.setAttributeNS(null, 'height', 80);
        rect.setAttributeNS(null, 'fill', "rgba(179, 176, 176, 0.258)");


        let text = document.createElementNS(SVG_NS, 'text');
        text.setAttributeNS(null, 'x', this.x);
        text.setAttributeNS(null, 'y', this.y);
        text.setAttributeNS(null, 'fill', 'black');
        text.setAttributeNS(null, 'font-size', 30);
        text.setAttributeNS(null, 'font-family', '"Silkscreen web", monotype');

        if (score1 >= PROPIEDADES.maxPoint) {
            text.textContent = `Player 1`;
            this.pingp1.play();
        } else if (score2 >= PROPIEDADES.maxPoint) {

            text.textContent = `Player 2 `;
            this.pingp2.play();
        }


        let text2 = document.createElementNS(SVG_NS, 'text');
        text2.setAttributeNS(null, 'x', this.x);
        text2.setAttributeNS(null, 'y', this.y + 40);
        text2.setAttributeNS(null, 'fill', 'red');
        text2.setAttributeNS(null, 'font-size', 30);
        text2.setAttributeNS(null, 'font-family', '"Silkscreen web", monotype');
        text2.textContent = `Has won`


        let text3 = document.createElementNS(SVG_NS, 'text');
        text3.setAttributeNS(null, 'x', this.x + 180);
        text3.setAttributeNS(null, 'y', this.y + 35);
        text3.setAttributeNS(null, 'fill', 'gold');
        text3.setAttributeNS(null, 'font-size', 10);
        text3.setAttributeNS(null, 'font-family', '"Silkscreen web", monotype');
        text3.textContent = `press space & play again`



        let text4 = document.createElementNS(SVG_NS, 'text');
        text4.setAttributeNS(null, 'x', this.x + 220);
        text4.setAttributeNS(null, 'y', this.y);
        text4.setAttributeNS(null, 'fill', 'gold');
        text4.setAttributeNS(null, 'font-size', 20);
        text4.setAttributeNS(null, 'font-family', '"Silkscreen web", monotype');
        text4.textContent = `${score1} vs ${score2}`

        svg.appendChild(rect);
        svg.appendChild(text);
        svg.appendChild(text2);
        svg.appendChild(text3);
        svg.appendChild(text4);
    }
}