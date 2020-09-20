import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FiltersComponent } from './components/filters/filters.component';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FiltersComponent,
      ],
      providers: [
        AppService,
      ],
      imports: [
        NoopAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should filter games when player count filter is triggered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockService = fixture.debugElement.injector.get<AppService>(AppService as Type<AppService>);
    spyOn(mockService, 'getGamesList').and.returnValue([]);

    fixture.detectChanges();
    expect(mockService.getGamesList).toHaveBeenCalledWith();

    app.playersControl.setValue(4);
    fixture.detectChanges();
    expect(mockService.getGamesList).toHaveBeenCalledWith(4, '');
  });

  it('should filter games when duration filter is triggered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockService = fixture.debugElement.injector.get<AppService>(AppService as Type<AppService>);
    spyOn(mockService, 'getGamesList').and.returnValue([]);

    fixture.detectChanges();
    expect(mockService.getGamesList).toHaveBeenCalledWith();

    app.durationControl.setValue('variable');
    fixture.detectChanges();
    expect(mockService.getGamesList).toHaveBeenCalledWith('', 'variable');
  });

  it('should filter games when both filters are triggered', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const mockService = fixture.debugElement.injector.get<AppService>(AppService as Type<AppService>);
    spyOn(mockService, 'getGamesList').and.returnValue([]);

    fixture.detectChanges();

    app.playersControl.setValue(4);
    fixture.detectChanges();
    app.durationControl.setValue('variable');
    fixture.detectChanges();
    expect(mockService.getGamesList).toHaveBeenCalledWith(4, 'variable');
  });
});
