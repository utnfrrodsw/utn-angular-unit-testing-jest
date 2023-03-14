import { Directive, Input } from "@angular/core";

@Directive({
    selector: '[warningLimit]'
})
export class WarningLimitDirectiveMock {
    @Input() warningLimit: number | null = null;

    @Input() alertLimit: number | null = null;
}