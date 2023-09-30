window.addEventListener('DOMContentLoaded', function () {

    class Shape {
        constructor(x, y) {
            this.div = document.createElement('div');
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;
            this.div.style.position = 'absolute'

            canvas.appendChild(this.div)
        }

        describe() {
            console.log('doink')
        }

    }

    class Rectangle extends Shape {
        constructor(x, y, width, height) {
            super(x, y)
            let widthVal = document.getElementById('rectangleWidth').value;
            let heightVal = document.getElementById('rectangleHeight').value;
            this.div.style.width = `${widthVal}px`;
            this.div.style.height = `${heightVal}px`;
            this.div.classList.add('rectangle')
        }
    }

    class Square extends Rectangle {
        constructor(x, y, sideLength) {
            super(x, y)
            this.sideLength = sideLength
            this.div.classList.replace('rectangle', 'square');
        }        
    }

    class Circle extends Shape {
        constructor(radius) {
            super(x, y);
            this.div.classList.add('circle');
        }
    }

    class Triangle extends Shape {
        constructor(height) {
            super(x, y);
            this.div.classList.add('triangle');
        }        
    }

    let canvas = document.getElementById('canvas');
    let rectangleBtn = document.getElementById("insertRectangleBtn");
    let squareBtn = document.getElementById("insertSquareBtn");
    let circleBtn = document.getElementById("insertCircleBtn");
    let triangleBtn = document.getElementById("insertTriangleBtn");
    const maxVal = 600;

    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    rectangleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal)
        let yVal = randomVal(0, maxVal)
        let rectangle = new Rectangle(xVal, yVal)
    })

    squareBtn.addEventListener('click', function () {
        new Square
    })

    circleBtn.addEventListener('click', function () {
        new Circle
    })

    triangleBtn.addEventListener('click', function () {
        new Triangle
    })



});