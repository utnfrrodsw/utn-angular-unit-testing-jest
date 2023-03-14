import { TestBed } from "@angular/core/testing";
import { CounterService } from "./counter.service";
import { RegistryService } from "./registry.service";

class RegistryMock {
    countIncrement(): void {}

    countDecrement(): void {}

    countReset(): void {}

    get(key: string) {}
}

const RegistryValue = {
    countIncrement: jest.fn(),

    countDecrement: jest.fn(),

    countReset: jest.fn(),

    get: jest.fn()
}

describe('CounterService Testbed', () => {
    let service: CounterService;
    let registry: RegistryService;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                CounterService,
                // RegistryService,
                // { provide: RegistryService, useClass: RegistryMock }
                { provide: RegistryService, useValue: RegistryValue }
            ]
        });

        service = TestBed.inject(CounterService);
        registry = TestBed.inject(RegistryService);
    });

    it('should increment counter', () => {
        const spy = jest.spyOn(registry, 'countIncrement');
        service.increment();
        expect(service.getCounter()).toEqual(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should decrement counter', () => {
        service.decrement(); // -1
        expect(service.getCounter()).toEqual(-1);
    });

    it('should reset counter', () => {
        service.increment(); // 1
        service.reset(); // 0
        expect(service.getCounter()).toEqual(0);
    });
});