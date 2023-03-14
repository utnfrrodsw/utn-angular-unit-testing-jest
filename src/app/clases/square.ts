import { Shape } from "./shape";

export class Square implements Shape {
    width: number;

    constructor(width: number) {
        this.width = width;
    }

    getArea(): number {
        return Math.pow(this.width, 2);
    }
}