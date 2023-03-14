import { RegistryServiceMock } from "./registry.service.mock";

export class CounterServiceMock {
    private counter = 0;

    increment(): void {
        this.counter++;
    }

    decrement(): void {
        this.counter--;
    }

    reset(): void {
        this.counter = 0;
    }

    getCounter(): number {
        return this.counter;
    }

    getRegistry() {
        return new RegistryServiceMock();
    }
}