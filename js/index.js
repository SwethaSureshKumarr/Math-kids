// loads the first frame 
var previousSelector = "";
//shapes object
var shapes = {
    circle: {
        radius: 0,
        area: 0,
        perimeter: 0,
        getArea: function(radius) {
            return ((22 / 7 * this.radius ** 2).toFixed(2));
        },
        getPerimeter: function(radius) {
            return ((22 / 7 * this.radius * 2).toFixed(2));
        }
    },
    triangle: {
        radius: 0,
        area: 0,
        perimeter: 0,
        getArea: function(radius) {
            return ((0.433 * this.radius ** 2).toFixed(2));
        },
        getPerimeter: function(radius) {
            return ((3 * this.radius).toFixed(2));
        }
    },
    square: {
        radius: 0,
        area: 0,
        perimeter: 0,
        getArea: function(radius) {
            return (this.radius ** 2);
        },
        getPerimeter: function(radius) {
            return (4 * this.radius);
        }
    }
};
// displaying the tickmark on the circles
function showCheckMark(tickShape) {
    if (previousSelector) {
        hide(`#${previousSelector}`);
    }
    show(`#${tickShape}`);
    previousSelector = tickShape;
    show("#nextBtn");
}
// toggle between the buttons
function displayNext() {
    measurement(previousSelector.substring(4).toLowerCase());
}
// first frames of the shapes
function measurement(shape) {
    hide("#mainFrame");
    show(`#${shape}Measurement`);
}

function calculationOfShapes(shape) {
    shapes[shape].radius = document.getElementById(`${shape}RadiusValue`).value;
    shapes[shape].area = shapes[shape].getArea(shapes[shape].radius);
    shapes[shape].perimeter = shapes[shape].getPerimeter(shapes[shape].radius);
    result(shape);
}

function result(shape) {
    hide(`#${shape}Measurement`);
    show(`#${shape}Result`);
    document.getElementById(`${shape}Radius`).innerHTML = shapes[shape].radius;
    document.getElementById(`${shape}Area`).innerHTML = shapes[shape].area;
    document.getElementById(`${shape}Perimeter`).innerHTML = shapes[shape].perimeter;
}

function show(element) {
    var elements = document.querySelector(element);
    elements.classList.remove("hide-element");
}

function hide(element) {
    var elements = document.querySelector(element);
    elements.classList.add("hide-element");
}