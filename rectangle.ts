// Rectange class to calculate area and perimeter of a rectangle
export class Rectangle {

    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    
    // Method to calculate area of the rectangle
    area(): number {
        return this.width * this.height;
    }
    
    // Method to calculate perimeter of the rectangle
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
    }