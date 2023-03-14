import { CounterService } from './services/counter.service';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CounterServiceMock } from './mocks/counter.service.mock';
import { ApiService, userResponse } from './services/api.service';
import { ApiServiceMock } from './mocks/api.service';
import { UpperPipeMock } from './mocks/upper.pipe.mock';
import { MaskNumberPipeMock } from './mocks/mask-number.pipe.mock';
import { WarningLimitDirectiveMock } from './mocks/warning-limit.directive.mock';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UpperPipeMock,
        MaskNumberPipeMock,
        WarningLimitDirectiveMock,
      ],
      providers: [
        { provide: CounterService, useClass: CounterServiceMock },
        { provide: ApiService, useValue: ApiServiceMock }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-unit-testing app is running!');
  });

  it('should get title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getTitle()).toEqual('angular-unit-testing');
  });

  it('should increment counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = TestBed.inject(CounterService);
    const spyIncrement = jest.spyOn(service, 'increment');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttonIncrement: HTMLButtonElement | null = compiled.querySelector('#btn-increment');
    buttonIncrement && buttonIncrement.click();
    expect(spyIncrement).toHaveBeenCalled();
  });

  it('should decrement counter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = TestBed.inject(CounterService);
    const spyDecrement = jest.spyOn(service, 'decrement');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const buttonDecrement: HTMLButtonElement | null = compiled.querySelector('#btn-decrement');
    buttonDecrement && buttonDecrement.click();
    expect(spyDecrement).toHaveBeenCalled();
  });

  it('should get counter value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = TestBed.inject(CounterService);
    const spyIncrement = jest.spyOn(service, 'increment');
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pElement: HTMLParagraphElement | null = compiled.querySelector('#counter');
    component.increment();
    fixture.detectChanges();
    expect(spyIncrement).toHaveBeenCalled();
    expect(pElement?.textContent).toEqual('1');
  });

  it('should get user from external api', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const service = TestBed.inject(ApiService);
    const result: userResponse = {
      results: [{
          name: {
              title: 'Mr',
              first: 'Light',
              last: 'Yagami'
          },
          picture: {
              large: 'http://some-image.png'
          }
      }]
    };
    const spyGetUser = jest.spyOn(service, 'getRandomUser').mockReturnValue(of(result));
    const component = fixture.componentInstance;
    component.getRandomUser();
    expect(component.user?.name.first).toEqual('Light');
  });
});
