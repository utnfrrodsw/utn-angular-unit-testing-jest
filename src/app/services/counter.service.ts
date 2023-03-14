import { Injectable } from "@angular/core";
import { RegistryService } from "./registry.service";

@Injectable()
export class CounterService {
    private counter = 0;

    constructor(private registryService: RegistryService) {}

    increment(): void {
        this.counter++;
        this.registryService.countIncrement();
    }

    decrement(): void {
        this.counter--;
        this.registryService.countDecrement();
    }

    reset(): void {
        this.counter = 0;
        this.registryService.countReset();
    }

    getCounter(): number {
        return this.counter;
    }

    getRegistry(): RegistryService {
        return this.registryService;
    }
}