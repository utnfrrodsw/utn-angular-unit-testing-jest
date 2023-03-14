import { Shape } from "./shape";

export class Triangle implements Shape {
    base: number;
    height: number;
    protected name: string = 'TRIANGLE';

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    getArea(): number {
        return this.base * this.height * 0.5;
    }

    getName(): string {
        return this.name;
    }
}