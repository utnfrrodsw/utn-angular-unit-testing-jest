import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WarningLimitDirective } from './directives/warning-limit.directive';
import { MaskNumberPipe } from './pipes/mask-number.pipe';
import { UpperPipe } from './pipes/upper.pipe';
import { ApiService } from './services/api.service';
import { CounterService } from './services/counter.service';
import { MaskService } from './services/mask.service';
import { RegistryService } from './services/registry.service';

@NgModule({
  declarations: [
    AppComponent,
    WarningLimitDirective,
    UpperPipe,
    MaskNumberPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    CounterService,
    RegistryService,
    ApiService,
    MaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
