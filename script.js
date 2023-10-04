window.addEventListener('DOMContentLoaded', function () {

    // The 'Shape' class is evidently very empty. The only source of inheritance throughout
    // this entire document, as of now, is the styling in the constructor.
    class Shape {
        constructor(x, y) {
            this.div = document.createElement('div');
            this.div.style.left = `${x}px`;
            this.div.style.top = `${y}px`;

            canvas.appendChild(this.div)
        }

    }

    // The repetition of each shape is pretty excruciating.
    // Although, I believe it to be more readable *because* of the repetition

    class Rectangle extends Shape {
        constructor(x, y) {
            super(x, y)
            let widthVal = document.getElementById('rectangleWidth').value;
            let heightVal = document.getElementById('rectangleHeight').value;
            this.div.style.width = `${widthVal}px`;
            this.div.style.height = `${heightVal}px`;
            this.div.classList.add('rectangle')

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        // The 'describe' function, below, is where the repetition becomes harder to digest;
        // Due to the variable names changing (width, sideLength, radius), the potential
        // for confusion increases with the conversion to inheritance

        describe = () => {

            // The whole "shapeName" and "grammaredShapeName" bit will vanish with inheritance.
            // This is because, in avoiding inheritance, I also tried to avoid the constructor
            // arguments as much as possible during object instantiation.

            let shapeName = this.div.classList[0].charAt(0).toUpperCase() + this.div.classList[0].slice(1);
            let grammaredShapeName = document.createTextNode(shapeName);
            let widthVal = document.getElementById('rectangleWidth').value;
            let heightVal = document.getElementById('rectangleHeight').value;
            let shapeWidth = document.createTextNode(`${widthVal}px`);
            let shapeHeight = document.createTextNode(`${heightVal}px`);
            let shapeRadius = document.createTextNode('N/A');
            let shapeArea = document.createTextNode(`${widthVal*heightVal}px`);
            let shapePerimeter = document.createTextNode(`${(widthVal*2)+(heightVal*2)}px`);

            let clickedShapeName = document.getElementById('clickedShapeName');
            let clickedShapeWidth = document.getElementById('clickedShapeWidth');
            let clickedShapeHeight = document.getElementById('clickedShapeHeight');
            let clickedShapeRadius = document.getElementById('clickedShapeRadius');
            let clickedShapeArea = document.getElementById('clickedShapeArea');
            let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

            // As I inspect this code for refactorization opportunities, I see that the below
            // chunk of code can be made simpler with a for loop through an array of the above
            // variables.
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

            clickedShapeName.appendChild(grammaredShapeName);
            clickedShapeWidth.appendChild(shapeWidth);
            clickedShapeHeight.appendChild(shapeHeight);
            clickedShapeRadius.appendChild(shapeRadius);
            clickedShapeArea.appendChild(shapeArea);
            clickedShapePerimeter.appendChild(shapePerimeter);
        }

        // This could also be refactored into a for loop through an array.
        deleteSelf = () => {
            clickedShapeName.removeChild(clickedShapeName.childNodes[0]);
            clickedShapeWidth.removeChild(clickedShapeWidth.childNodes[0]);
            clickedShapeHeight.removeChild(clickedShapeHeight.childNodes[0]);
            clickedShapeRadius.removeChild(clickedShapeRadius.childNodes[0]);
            clickedShapeArea.removeChild(clickedShapeArea.childNodes[0]);
            clickedShapePerimeter.removeChild(clickedShapePerimeter.childNodes[0]);
            canvas.removeChild(this.div);
        }
    }

    class Square extends Shape {
        constructor(x, y) {
            super(x, y);
            let sideLengthVal = document.getElementById('squareSideLength').value;
            this.div.style.width = `${sideLengthVal}px`;
            this.div.style.height = `${sideLengthVal}px`;
            this.div.classList.add('square');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let shapeName = this.div.classList[0].charAt(0).toUpperCase() + this.div.classList[0].slice(1);
            let grammaredShapeName = document.createTextNode(shapeName);
            let sideLengthVal = document.getElementById('squareSideLength').value;
            let shapeWidth = document.createTextNode(`${sideLengthVal}px`);
            let shapeHeight = document.createTextNode(`${sideLengthVal}px`);
            let shapeRadius = document.createTextNode('N/A');
            let shapeArea = document.createTextNode(`${(sideLengthVal*sideLengthVal)}px`);
            let shapePerimeter = document.createTextNode(`${sideLengthVal*4}px`);

            let clickedShapeName = document.getElementById('clickedShapeName');
            let clickedShapeWidth = document.getElementById('clickedShapeWidth');
            let clickedShapeHeight = document.getElementById('clickedShapeHeight');
            let clickedShapeRadius = document.getElementById('clickedShapeRadius');
            let clickedShapeArea = document.getElementById('clickedShapeArea');
            let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

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

            clickedShapeName.appendChild(grammaredShapeName);
            clickedShapeWidth.appendChild(shapeWidth);
            clickedShapeHeight.appendChild(shapeHeight);
            clickedShapeRadius.appendChild(shapeRadius);
            clickedShapeArea.appendChild(shapeArea);
            clickedShapePerimeter.appendChild(shapePerimeter);
        }

        deleteSelf = () => {
            clickedShapeName.removeChild(clickedShapeName.childNodes[0]);
            clickedShapeWidth.removeChild(clickedShapeWidth.childNodes[0]);
            clickedShapeHeight.removeChild(clickedShapeHeight.childNodes[0]);
            clickedShapeRadius.removeChild(clickedShapeRadius.childNodes[0]);
            clickedShapeArea.removeChild(clickedShapeArea.childNodes[0]);
            clickedShapePerimeter.removeChild(clickedShapePerimeter.childNodes[0]);
            canvas.removeChild(this.div);
        }
    }

    class Circle extends Shape {
        constructor(x, y) {
            super(x, y);
            let radiusVal = document.getElementById('circleRadius').value;
            this.div.style.width = `${radiusVal}px`;
            this.div.style.height = `${radiusVal}px`;
            this.div.classList.add('circle');

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let shapeName = this.div.classList[0].charAt(0).toUpperCase() + this.div.classList[0].slice(1);
            let grammaredShapeName = document.createTextNode(shapeName);
            let radiusVal = document.getElementById('circleRadius').value;
            let shapeWidth = document.createTextNode(`${radiusVal*2}px`);
            let shapeHeight = document.createTextNode(`${radiusVal*2}px`);
            let shapeRadius = document.createTextNode(`${radiusVal}px`);
            let shapeArea = document.createTextNode(`${(3.14*radiusVal)**2}px`);
            let shapePerimeter = document.createTextNode(`${2*3.14*radiusVal}px`);

            let clickedShapeName = document.getElementById('clickedShapeName');
            let clickedShapeWidth = document.getElementById('clickedShapeWidth');
            let clickedShapeHeight = document.getElementById('clickedShapeHeight');
            let clickedShapeRadius = document.getElementById('clickedShapeRadius');
            let clickedShapeArea = document.getElementById('clickedShapeArea');
            let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

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

            clickedShapeName.appendChild(grammaredShapeName);
            clickedShapeWidth.appendChild(shapeWidth);
            clickedShapeHeight.appendChild(shapeHeight);
            clickedShapeRadius.appendChild(shapeRadius);
            clickedShapeArea.appendChild(shapeArea);
            clickedShapePerimeter.appendChild(shapePerimeter);
        }

        deleteSelf = () => {
            clickedShapeName.removeChild(clickedShapeName.childNodes[0]);
            clickedShapeWidth.removeChild(clickedShapeWidth.childNodes[0]);
            clickedShapeHeight.removeChild(clickedShapeHeight.childNodes[0]);
            clickedShapeRadius.removeChild(clickedShapeRadius.childNodes[0]);
            clickedShapeArea.removeChild(clickedShapeArea.childNodes[0]);
            clickedShapePerimeter.removeChild(clickedShapePerimeter.childNodes[0]);
            canvas.removeChild(this.div);
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

            this.div.addEventListener('click', this.describe);
            this.div.addEventListener('dblclick', this.deleteSelf);
        }

        describe = () => {
            let shapeName = this.div.classList[0].charAt(0).toUpperCase() + this.div.classList[0].slice(1);
            let grammaredShapeName = document.createTextNode(shapeName);
            let height = document.getElementById('triangleHeight').value;
            let shapeWidth = document.createTextNode(`${height}px`);
            let shapeHeight = document.createTextNode(`${height}px`);
            let shapeRadius = document.createTextNode('N/A');
            let shapeArea = document.createTextNode(`${(height*height)/2}px`);
            let shapePerimeter = document.createTextNode(`${height*3}px`);

            let clickedShapeName = document.getElementById('clickedShapeName');
            let clickedShapeWidth = document.getElementById('clickedShapeWidth');
            let clickedShapeHeight = document.getElementById('clickedShapeHeight');
            let clickedShapeRadius = document.getElementById('clickedShapeRadius');
            let clickedShapeArea = document.getElementById('clickedShapeArea');
            let clickedShapePerimeter = document.getElementById('clickedShapePerimeter');

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

            clickedShapeName.appendChild(grammaredShapeName);
            clickedShapeWidth.appendChild(shapeWidth);
            clickedShapeHeight.appendChild(shapeHeight);
            clickedShapeRadius.appendChild(shapeRadius);
            clickedShapeArea.appendChild(shapeArea);
            clickedShapePerimeter.appendChild(shapePerimeter);
        }

        deleteSelf = () => {
            clickedShapeName.removeChild(clickedShapeName.childNodes[0]);
            clickedShapeWidth.removeChild(clickedShapeWidth.childNodes[0]);
            clickedShapeHeight.removeChild(clickedShapeHeight.childNodes[0]);
            clickedShapeRadius.removeChild(clickedShapeRadius.childNodes[0]);
            clickedShapeArea.removeChild(clickedShapeArea.childNodes[0]);
            clickedShapePerimeter.removeChild(clickedShapePerimeter.childNodes[0]);
            canvas.removeChild(this.div);
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
            let rectangle = new Rectangle(xVal, yVal)
        }
    })

    squareBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        if (document.getElementById('squareSideLength').value != '') {
            let square = new Square(xVal, yVal);
        }
    })

    circleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal)
        let yVal = randomVal(0, maxVal)
        if (document.getElementById('circleRadius').value != '') {
            let circle = new Circle(xVal, yVal)
        }
    })

    triangleBtn.addEventListener('click', function () {
        let xVal = randomVal(0, maxVal);
        let yVal = randomVal(0, maxVal);
        if (document.getElementById('triangleHeight').value) {
            let triangle = new Triangle(xVal, yVal);
        }
    })



});