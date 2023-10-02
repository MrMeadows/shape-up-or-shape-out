window.addEventListener('DOMContentLoaded', function () {

    class Shape {
        constructor(name, width, x, y) {
            this.div = document.createElement('div');
            this.name = name;
            this.width = width;
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;

            canvas.appendChild(this.div)

            this.div.addEventListener('click', () => {
                let shapeName = document.createTextNode(this.name);
                let shapeWidth = document.createTextNode(`${this.width}px`);
                let clickedShapeName = document.getElementById('clickedShapeName');
                let clickedShapeWidth = document.getElementById('clickedShapeWidth');

                if (clickedShapeName.childNodes.length > 0) {
                    clickedShapeName.removeChild(clickedShapeName.childNodes[0]);
                }
                if (clickedShapeWidth.childNodes.length > 0) {
                    clickedShapeWidth.removeChild(clickedShapeWidth.childNodes[0]);
                }
                if (clickedShapeHeight.childNodes.length > 0) {
                    clickedShapeHeight.removeChild(clickedShapeHeight.childNodes[0]);
                }
                if (clickedShapeRadius.childNodes.length > 0) {
                    clickedShapeRadius.removeChild(clickedShapeRadius.childNodes[0]);
                }
                if (clickedShapeArea.childNodes.length > 0) {
                    clickedShapeArea.removeChild(clickedShapeArea.childNodes[0]);
                }
                if (clickedShapePerimeter.childNodes.length > 0) {
                    clickedShapePerimeter.removeChild(clickedShapePerimeter.childNodes[0]);
                }
                clickedShapeName.appendChild(shapeName);
                clickedShapeWidth.appendChild(shapeWidth);
            })
        }

        describe() {
            console.log('doink')
        }
    }

    class Rectangle extends Shape {
        constructor(name, x, y) {
            super(name, x, y)
            let widthVal = document.getElementById('rectangleWidth').value;
            let heightVal = document.getElementById('rectangleHeight').value;
            this.div.style.width = `${widthVal}px`;
            this.div.style.height = `${heightVal}px`;
            this.div.classList.add('rectangle')

            this.div.addEventListener('click', function() {
                let shapeWidth = document.createTextNode(`${widthVal}px`);
                let shapeHeight = document.createTextNode(`${heightVal}px`);
                let shapeRadius = document.createTextNode('N/A');
                let shapeArea = document.createTextNode(`${widthVal*heightVal}px`);
                let shapePerimeter = document.createTextNode(`${(widthVal*2)+(heightVal*2)}px`);

                let clickedShapeWidth = document.getElementById('clickedShapeWidth');
                let clickedShapeHeight = document.getElementById('clickedShapeHeight');
                let clickedShapeRadius = document.getElementById('clickedShapeRadius');
                let clickedShapeArea = document.getElementById('clickedShapeArea');
                let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

                clickedShapeWidth.appendChild(shapeWidth);
                clickedShapeHeight.appendChild(shapeHeight);
                clickedShapeRadius.appendChild(shapeRadius);
                clickedShapeArea.appendChild(shapeArea);
                clickedShapePerimeter.appendChild(shapePerimeter);
            })
        }
    }

    class Square extends Rectangle {
        constructor(name, x, y) {
            super(name, x, y)
            let sideLengthVal = document.getElementById('squareSideLength').value;
            this.div.style.width = `${sideLengthVal}px`;
            this.div.style.height = `${sideLengthVal}px`;
            this.div.classList.replace('rectangle', 'square');

            this.div.addEventListener('click', function() {
                shapeWidth = document.createTextNode(`${sideLengthVal}px`);
                shapeHeight = document.createTextNode(`${sideLengthVal}px`);
                shapeRadius = document.createTextNode('N/A');
                shapeArea = document.createTextNode(`${(sideLengthVal*sideLengthVal)}px`);
                shapePerimeter = document.createTextNode(`${sideLengthVal*4}px`);

                let clickedShapeWidth = document.getElementById('clickedShapeWidth');
                let clickedShapeHeight = document.getElementById('clickedShapeHeight');
                let clickedShapeRadius = document.getElementById('clickedShapeRadius');
                let clickedShapeArea = document.getElementById('clickedShapeArea');
                let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

                clickedShapeWidth.appendChild(shapeWidth);
                clickedShapeHeight.appendChild(shapeHeight);
                clickedShapeRadius.appendChild(shapeRadius);
                clickedShapeArea.appendChild(shapeArea);
                clickedShapePerimeter.appendChild(shapePerimeter);
            })
        }        
    }

    class Circle extends Shape {
        constructor(name, x, y) {
            super(name, x, y);
            let radiusVal = document.getElementById('circleRadius').value;
            this.div.style.width = `${radiusVal}px`;
            this.div.style.height = `${radiusVal}px`;
            this.div.classList.add('circle');

            this.div.addEventListener('click', function() {
                let shapeWidth = document.createTextNode(`${radiusVal*2}px`);
                let shapeHeight = document.createTextNode(`${radiusVal*2}px`);
                let shapeRadius = document.createTextNode(`${radiusVal}px`);
                let shapeArea = document.createTextNode(`${(3.14*radiusVal)**2}px`);
                let shapePerimeter = document.createTextNode(`${2*3.14*radiusVal}px`);

                let clickedShapeWidth = document.getElementById('clickedShapeWidth');
                let clickedShapeHeight = document.getElementById('clickedShapeHeight');
                let clickedShapeRadius = document.getElementById('clickedShapeRadius');
                let clickedShapeArea = document.getElementById('clickedShapeArea');
                let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

                clickedShapeWidth.appendChild(shapeWidth);
                clickedShapeHeight.appendChild(shapeHeight);
                clickedShapeRadius.appendChild(shapeRadius);
                clickedShapeArea.appendChild(shapeArea);
                clickedShapePerimeter.appendChild(shapePerimeter);
            })
        }
    }

    class Triangle extends Shape {
        constructor(name, x, y) {
            super(name, x, y);
            let height = document.getElementById('triangleHeight').value;
            this.div.style.borderBottom = `${height}px solid #EDD75F`;
            this.div.style.borderLeft = `${(height/2)}px solid transparent`;
            this.div.style.borderRight = `${(height/2)}px solid transparent`;
            this.div.classList.add('triangle');

            this.div.addEventListener('click', function () {

                let shapeWidth = document.createTextNode(`${height}px`);
                let shapeHeight = document.createTextNode(`${height}px`);
                let shapeRadius = document.createTextNode('N/A');
                let shapeArea = document.createTextNode(`${(height*height)/2}px`);
                let shapePerimeter = document.createTextNode(`${height*3}px`);

                let clickedShapeWidth = document.getElementById('clickedShapeWidth');
                let clickedShapeHeight = document.getElementById('clickedShapeHeight');
                let clickedShapeRadius = document.getElementById('clickedShapeRadius');
                let clickedShapeArea = document.getElementById('clickedShapeArea');
                let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

                clickedShapeWidth.appendChild(shapeWidth);
                clickedShapeHeight.appendChild(shapeHeight);
                clickedShapeRadius.appendChild(shapeRadius);
                clickedShapeArea.appendChild(shapeArea);
                clickedShapePerimeter.appendChild(shapePerimeter);
            })
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
        if (document.getElementById('rectangleWidth').value != '' && document.getElementById('rectangleHeight').value != '') {
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