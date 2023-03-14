import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'upper'
})
export class UpperPipe implements PipeTransform {
    transform(text: string): string {
        return text.toUpperCase();
    }
}