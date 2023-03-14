import { CounterService } from "./counter.service";
import { RegistryService } from "./registry.service";

const service = new CounterService(new RegistryService());

describe('CounterService Simple', () => {
    // let service: CounterService;

    // beforeEach(async () => {
    //     service = new CounterService();
    // });

    it('should increment counter', () => {
        service.increment();
        expect(service.getCounter()).toEqual(1);
    });

    it('should decrement counter', () => {
        service.decrement();
        expect(service.getCounter()).toEqual(0);
    });

    it('should reset counter', () => {
        service.increment(); // 1
        service.reset(); // 0
        expect(service.getCounter()).toEqual(0);
    });
});