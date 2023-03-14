import { Pipe, PipeTransform } from "@angular/core";
import { MaskService } from "../services/mask.service";

@Pipe({
    name: 'maskNumber'
})
export class MaskNumberPipe implements PipeTransform {

    constructor(private maskService: MaskService) {}

    transform(number: string, digits: number, character: string = '*'): string {
        const masked = number.slice(0, -digits);
        const visibleDigits = number.slice(-digits);
        return `${this.maskService.maskText(masked, character)}${visibleDigits}`;
    }
}