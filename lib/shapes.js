class shape{
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}
class triangle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        return `<polygon fill="${this.shapeColor}" points="70,180 230,180 150,20"/>\n<text x="150" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class circle extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}
class square extends shape{
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render(){
        return `<rect x="70" y="20" fill="${this.shapeColor}" width="160" height="160"/>\n<text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

function generateSVG(data){
    // Creating a shape object corresponding to user input
    const shapes = {triangle: triangle, square: square, circle: circle}
    let shape = new shapes[data.shape](data.text, data.textColor, data.shapeColor);

    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n${shape.render()}\n</svg>`;
}

module.exports = {
    generateSVG: generateSVG,
    triangle: triangle,
    square: square,
    circle: circle
}