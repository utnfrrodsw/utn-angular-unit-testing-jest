import { WarningLimitDirective } from './warning-limit.directive';
import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from '@angular/platform-browser';

@Component({
    selector: 'fake-component',
    template: `
        <input type="number" [warningLimit]="5" [alertLimit]="10">
    `
})
class FakeComponent {}

describe('WarningLimit Directive', () => {
    let fixture: ComponentFixture<FakeComponent>;
    let input: HTMLInputElement;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [
                FakeComponent,
                WarningLimitDirective
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(FakeComponent);
        fixture.detectChanges();

        input = fixture.debugElement.query(By.directive(WarningLimitDirective)).nativeElement;
    });

    it('should create input', () => {
        expect(input).toBeTruthy();
    });

    it('should not have any class', () => {
        expect(input.className).toEqual('');
    });

    it('should apply warning class', () => {
        input.value = '6';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(input.className).toContain('warning');
        expect(input.className).not.toContain('alert');
    });

    it('should apply alert class', () => {
        input.value = '26';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(input.className).toContain('alert');
    });
});