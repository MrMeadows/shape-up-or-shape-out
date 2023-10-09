window.addEventListener('DOMContentLoaded', function () {

    // The 'Shape' class is evidently very empty. The only source of inheritance throughout
    // this entire document, as of now, is the styling in the constructor.
    class Shape {
        constructor(name, x, y) {
            this.div = document.createElement('div');
            this.name = name;
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;

            canvas.appendChild(this.div)
        }

        describe = () => {
            let shapeName = document.createTextNode(this.name);
            let shapeWidth = document.createTextNode(`${this.width}px`);
            let shapeHeight = document.createTextNode(`${this.height}px`);
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

            clickedShapeName.appendChild(shapeName);
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

    class Rectangle extends Shape {
        constructor(name, x, y, width, height) {
            super(name, x, y);

            this.name = name;
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
        constructor(width) {
            super(name, x, y);

            this.name = name;
            this.width = width;
            this.div.style.width = `${width}px`;
            this.div.style.height = `${width}px`;
            this.div.classList.add('square');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let shapeHeight = document.createTextNode(`${width}px`);
        }

    }

    class Circle extends Shape {
        constructor(radius) {
            super(name, x, y);

            this.name = name;
            this.radius = radius
            this.div.style.width = `${radius}px`;
            this.div.style.height = `${radius}px`;
            this.div.classList.add('circle');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let shapeWidth = document.createTextNode(`${radius*2}px`);
            let shapeHeight = document.createTextNode(`${radius*2}px`);
            let shapeRadius = document.createTextNode(`${radius}px`);
            let shapeArea = document.createTextNode(`${(3.14*radius)**2}px`);
            let shapePerimeter = document.createTextNode(`${2*3.14*radius}px`);
        }

    }

    class Triangle extends Shape {
        constructor(height) {
            super(x, y);
            
            this.name = name;
            this.height = height;
            this.div.style.borderBottom = `${height}px solid #EDD75F`;
            this.div.style.borderLeft = `${(height/2)}px solid transparent`;
            this.div.style.borderRight = `${(height/2)}px solid transparent`;
            this.div.classList.add('triangle');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let shapeWidth = document.createTextNode(`${height}px`);
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
            let rectangle = new Rectangle('Rectangle', xVal, yVal, widthVal, heightVal)
        }
    })

    //After testing, can convert all 'if' clauses below to input value boolean tests for brevity
    squareBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        let sideLengthVal = document.getElementById('squareSideLength').value;

        if (document.getElementById('squareSideLength').value != '') {
            let square = new Square('Square', xVal, yVal, sideLengthVal);
        }
    })

    circleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal)
        let yVal = randomVal(0, maxVal)
        let radiusVal = document.getElementById('circleRadius').value;

        if (document.getElementById('circleRadius').value != '') {
            let circle = new Circle('Circle', xVal, yVal, radiusVal)
        }
    })

    triangleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        let height = document.getElementById('triangleHeight').value;

        if (document.getElementById('triangleHeight').value) {
            let triangle = new Triangle('Triangle', xVal, yVal, height);
        }
    })



});