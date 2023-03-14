import { Injectable } from "@angular/core";

@Injectable()
export class MaskService {
    maskText(text: string, character: string): string {
        return text.replace(/./g, character);
    }
}