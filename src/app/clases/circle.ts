import { Shape } from "./shape";

export class Circle implements Shape {
    diameter: number;
    name = 'CIRCLE';
    
    constructor(diameter: number) {
        this.diameter = diameter;
    }

    getArea(): number {
        return Math.PI * Math.pow((this.diameter * 0.5), 2);
    }

    getName(): string {
        return this.name;
    }
}