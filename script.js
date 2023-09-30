window.addEventListener('DOMContentLoaded', function () {

    class Shape {
        constructor(x, y, width, height) {
            this.div = document.createElement('div');
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;

            canvas.appendChild(this.div)
        }

        describe() {
            console.log('doink')
        }

    }

    class Rectangle extends Shape {
        constructor(x, y) {
            super(x, y)
            let widthVal = document.getElementById('rectangleWidth').value;
            let heightVal = document.getElementById('rectangleHeight').value;
            this.div.style.width = `${widthVal}px`;
            this.div.style.height = `${heightVal}px`;
            this.div.classList.add('rectangle')
        }
    }

    class Square extends Rectangle {
        constructor(x, y) {
            super(x, y)
            let sideLengthVal = document.getElementById('squareSideLength').value;
            this.div.style.width = `${sideLengthVal}px`;
            this.div.style.height = `${sideLengthVal}px`;
            this.div.classList.replace('rectangle', 'square');
        }        
    }

    class Circle extends Shape {
        constructor(x, y) {
            super(x, y);
            let radiusVal = document.getElementById('circleRadius').value;
            this.div.style.width = `${radiusVal}px`;
            this.div.style.height = `${radiusVal}px`;
            this.div.classList.add('circle');
        }
    }

    class Triangle extends Shape {
        constructor(x, y) {
            super(x, y);
            let height = document.getElementById('triangleHeight').value;
            this.div.style.borderBottom = `${height}px solid #EDD75F`;
            this.div.style.borderLeft = `${(height/2)}px solid transparent`;
            this.div.style.borderRight = `${(height/2)}px solid transparent`;
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
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        let square = new Square(xVal, yVal);
    })

    circleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal)
        let yVal = randomVal(0, maxVal)
        let circle = new Circle(xVal, yVal)
    })

    triangleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        let triangle = new Triangle(xVal, yVal);
    })



});