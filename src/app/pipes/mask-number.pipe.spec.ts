import { MaskNumberPipe } from './mask-number.pipe';
import { TestBed } from "@angular/core/testing";
import { MaskService } from '../services/mask.service';

describe('MaskNumber Pipe', () => {
    let pipe: MaskNumberPipe;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [
                MaskNumberPipe,
                MaskService
            ]
        });

        pipe = TestBed.inject(MaskNumberPipe);
    });

    it('should format text correctly', () => {
        const text = '0123456789';
        expect(pipe.transform(text, 3)).toEqual('*******789');
    });

    it('should format text correctly', () => {
        const text = '0123456789';
        expect(pipe.transform(text, 3, '+')).toEqual('+++++++789');
    });
});