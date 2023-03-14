import { UpperPipe } from "./upper.pipe";

const pipe = new UpperPipe();

it('should format text to uppercase', () => {
    const text = 'eLeFaNtE';
    expect(pipe.transform(text)).toEqual(text.toUpperCase());
});