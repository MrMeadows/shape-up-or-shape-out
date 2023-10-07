window.addEventListener('DOMContentLoaded', function () {

    // The 'Shape' class is evidently very empty. The only source of inheritance throughout
    // this entire document, as of now, is the styling in the constructor.
    class Shape {
        constructor(name, x, y) {
            this.div = document.createElement('div');
            this.div.name = name;
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;

            canvas.appendChild(this.div)
        }

        describe = () => {
            let shapeWidth = document.createTextNode(`${this.width}px`);
            let shapeHeight = document.createTextNode(`${this.width}px`);
            let shapeRadius = document.createTextNode('N/A');
            let shapeArea = document.createTextNode(`${this.width*this.height}px`);
            let shapePerimeter = document.createTextNode(`${(this.width*2)+(this.height*2)}px`);

            let clickedShapeName = document.getElementById('clickedShapeName');
            let clickedShapeWidth = document.getElementById('clickedShapeWidth');
            let clickedShapeHeight = document.getElementById('clickedShapeHeight');
            let clickedShapeRadius = document.getElementById('clickedShapeRadius');
            let clickedShapeArea = document.getElementById('clickedShapeArea');
            let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');
            let targetArray = [clickedShapeName, clickedShapeWidth, clickedShapeHeight, clickedShapeRadius, clickedShapeArea, clickedShapePerimeter];

            for (let i of targetArray) {
                if (i.childNodes.length > 0) {
                    i.removeChild(i.childNodes[0]);
                }
            }

            clickedShapeName.appendChild(this.name);
            clickedShapeWidth.appendChild(shapeWidth);
            clickedShapeHeight.appendChild(shapeHeight);
            clickedShapeRadius.appendChild(shapeRadius);
            clickedShapeArea.appendChild(shapeArea);
            clickedShapePerimeter.appendChild(shapePerimeter);
        }

        deleteSelf = () => {
            let clickedShapeName = document.getElementById('clickedShapeName');
            let clickedShapeWidth = document.getElementById('clickedShapeWidth');
            let clickedShapeHeight = document.getElementById('clickedShapeHeight');
            let clickedShapeRadius = document.getElementById('clickedShapeRadius');
            let clickedShapeArea = document.getElementById('clickedShapeArea');
            let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');
            let targetArray = [clickedShapeName, clickedShapeWidth, clickedShapeHeight, clickedShapeRadius, clickedShapeArea, clickedShapePerimeter];

            for (let i of targetArray) {
                if (i.childNodes.length > 0) {
                    i.removeChild(i.childNodes[0]);
                }
            }

            canvas.removeChild(this.div);
        }

    }

    // The repetition of each shape is pretty excruciating.
    // Although, I believe it to be more readable *because* of the repetition

    class Rectangle extends Shape {
        constructor(width, height) {
            super(x, y)
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.div.style.width = `${width}px`;
            this.div.style.height = `${height}px`;
            this.div.classList.add('rectangle');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }
    }

    class Square extends Rectangle {
        constructor(sideLength) {
            super(x, y);
            let sideLengthVal = document.getElementById('squareSideLength').value;
            this.div.style.width = `${sideLengthVal}px`;
            this.div.style.height = `${sideLengthVal}px`;
            this.div.classList.add('square');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {

            let sideLengthVal = document.getElementById('squareSideLength').value;
            let shapeWidth = document.createTextNode(`${sideLengthVal}px`);
            let shapeHeight = document.createTextNode(`${sideLengthVal}px`);
            let shapeRadius = document.createTextNode('N/A');
            let shapeArea = document.createTextNode(`${(sideLengthVal*sideLengthVal)}px`);
            let shapePerimeter = document.createTextNode(`${sideLengthVal*4}px`);

        }

    }

    class Circle extends Shape {
        constructor(radius) {
            super(x, y);
            let radiusVal = document.getElementById('circleRadius').value;
            this.div.style.width = `${radiusVal}px`;
            this.div.style.height = `${radiusVal}px`;
            this.div.classList.add('circle');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let radiusVal = document.getElementById('circleRadius').value;
            let shapeWidth = document.createTextNode(`${radiusVal*2}px`);
            let shapeHeight = document.createTextNode(`${radiusVal*2}px`);
            let shapeRadius = document.createTextNode(`${radiusVal}px`);
            let shapeArea = document.createTextNode(`${(3.14*radiusVal)**2}px`);
            let shapePerimeter = document.createTextNode(`${2*3.14*radiusVal}px`);

        }

    }

    class Triangle extends Shape {
        constructor(height) {
            super(x, y);
            let height = document.getElementById('triangleHeight').value;
            this.div.style.borderBottom = `${height}px solid #EDD75F`;
            this.div.style.borderLeft = `${(height/2)}px solid transparent`;
            this.div.style.borderRight = `${(height/2)}px solid transparent`;
            this.div.classList.add('triangle');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let height = document.getElementById('triangleHeight').value;
            let shapeWidth = document.createTextNode(`${height}px`);
            let shapeHeight = document.createTextNode(`${height}px`);
            let shapeRadius = document.createTextNode('N/A');
            let shapeArea = document.createTextNode(`${(height*height)/2}px`);
            let shapePerimeter = document.createTextNode(`${height*3}px`);

        }

    }

    let canvas = document.getElementById('canvas');
    let rectangleBtn = document.getElementById("insertRectangleBtn");
    let squareBtn = document.getElementById("insertSquareBtn");
    let circleBtn = document.getElementById("insertCircleBtn");
    let triangleBtn = document.getElementById("insertTriangleBtn");
    const maxVal = 560;

    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    rectangleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal)
        let yVal = randomVal(0, maxVal)
        let widthVal = document.getElementById('rectangleWidth').value;
        let heightVal = document.getElementById('rectangleHeight').value;
        if (widthVal != '' && heightVal != '') {
            let rectangle = new Rectangle('Rectangle', xVal, yVal)
        }
    })

    squareBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        if (document.getElementById('squareSideLength').value != '') {
            let square = new Square('Square', xVal, yVal);
        }
    })

    circleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal)
        let yVal = randomVal(0, maxVal)
        if (document.getElementById('circleRadius').value != '') {
            let circle = new Circle('Circle', xVal, yVal)
        }
    })

    triangleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        if (document.getElementById('triangleHeight').value) {
            let triangle = new Triangle('Triangle', xVal, yVal);
        }
    })



});