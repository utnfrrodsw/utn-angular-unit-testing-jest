import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'maskNumber'
})
export class MaskNumberPipeMock implements PipeTransform {
    transform(text: string) { }
}