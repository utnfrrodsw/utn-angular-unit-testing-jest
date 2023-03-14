import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upper'
})
export class UpperPipeMock implements PipeTransform {
    transform(text: string) { }
}