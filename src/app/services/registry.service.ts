import { Injectable } from "@angular/core";

@Injectable()
export class RegistryService {
    private registry = new Map();

    constructor() {
        this.initializeRegistry();
    }

    initializeRegistry() {
        this.registry.set('increment', 0);
        this.registry.set('decrement', 0);
        this.registry.set('reset', 0);
    }

    countIncrement(): void {
        this.registry.set('increment', this.registry.get('increment') + 1);
    }

    countDecrement(): void {
        this.registry.set('decrement', this.registry.get('decrement') + 1);
    }

    countReset(): void {
        this.registry.set('reset', this.registry.get('reset') + 1);
    }

    get(key: string) {
        return this.registry.get(key);
    }
}