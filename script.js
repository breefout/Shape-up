const canvas = $('#canvas');
$( document ).ready(function() {
    $('Rectangle').onclick = new Rectangle($('#width').text(), $('#height').text());
    $('Square').onclick = new Square($('#sidelength').text());
    $('Circle').onclick = new Circle($('#radius').text());
    $('Isoceles').onclick = new Triangle($('#height').text());
});

class Shape {
    constructor() {
        this.shape = document.createElement("div");
        canvas[0].appendChild(this.shape);
        this.shape.onclick=this.describe
        this.shape.ondblclick = () => canvas[0].removeChild(this.shape);
    }
    describe() {
        $('#ShapeName').text = "Shape Name: " + this.name;
        $('#Width').text = "Width: " + this.width;
        $('#Height').text = "Height: " + this.height;
        $('#Radius').text = "Radius: " + this.radius;
        $('#Area').text = "Area: " + this.area;
        $('#Perimeter').text = "Perimeter: " + this.perimeter;

    }
}


class Circle extends Shape {
    constructor(radius) {
        super()
        this.name = "Circle";
        this.area = 3.14 * (radius * radius)
        this.perimeter = 2 * 3.14 * radius
        this.shape.style.backgroundcolor = "purple"
        this.shape.style.radius = radius
    }
}

class Triangle extends Shape {
    constructor(height) {
        super()
        this.name = "Triangle";
        this.area = (height * height) / 2
        this.perimeter = height * 3
        this.height = height
        this.base = height
        this.width = height
        this.shape.style.backgroundcolor = "yellow"
        this.shape.style.borderTopWidth = height + "px"
        this.shape.style.borderRightWidth = height + "px"
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.name = "Rectangle";
        this.area = width * height
        this.perimeter = 2*(height+width)
        this.height = height
        this.width = width
        this.shape.style.backgroundcolor = "green"
        this.shape.style.height = "" + height + "px"
        this.shape.style.width = "" + width + "px"
    }

}

class Square extends Shape {
    constructor(sideLength) {
        super()
        this.name = "Square";
        this.area = sideLength * sideLength
        this.perimeter = 4*sideLength
        this.height = sideLength
        this.width = sideLength
        this.shape.style.backgroundcolor = "red"
        this.shape.style.height = sideLength + "px"
        this.shape.style.width = sideLength + "px"
    }

}