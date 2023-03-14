import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[warningLimit]'
})
export class WarningLimitDirective {
    @Input() warningLimit: number | null = null;

    @Input() alertLimit: number | null = null;

    constructor(private elementRef: ElementRef<HTMLInputElement>) {}

    @HostBinding('class.warning')
    warning = false;

    @HostBinding('class.alert')
    alert = false;

    @HostListener('input')
    inputHandler() {
        const value = this.elementRef.nativeElement.valueAsNumber;
        this.warning = this.warningLimit !== null && value > this.warningLimit;
        this.alert = this.alertLimit !== null && value > this.alertLimit;
    }
}