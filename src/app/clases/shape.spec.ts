import { Circle } from "./circle";
import { Square } from "./square";
import { Triangle } from "./triangle";

const square = new Square(4);

it('should getArea - square', () => {
    expect(square.getArea()).toEqual(16);
});


const triangle = new Triangle(2, 5);

it('should getArea - triangle', () => {
    expect(triangle.getArea()).toEqual(5);
});

it('should get name - triangle', () => {
    expect(triangle.getName()).toEqual('TRIANGLE');
});

const circle = new Circle(5);

it('should getArea - circle', () => {
    const area = circle.getArea();
    expect(area).toBeGreaterThan(19);
    expect(area).toBeLessThan(19.7);
});