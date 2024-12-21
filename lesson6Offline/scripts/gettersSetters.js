class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        if (newWidth <= 0)  {
            throw new Error("Width must to have a positive size");
        }

        this._width = newWidth;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        if (newHeight <= 0)  {
            throw new Error("Height must to have a positive size");
        }

        this._height = newHeight;
    }

    area() {
        return this._width * this._height;
    }

};

const rectangle = new Rectangle(4, 5);

console.log(rectangle.width);

// rectangle.width = 3;
// console.log(rectangle.width);

console.log(rectangle.area());