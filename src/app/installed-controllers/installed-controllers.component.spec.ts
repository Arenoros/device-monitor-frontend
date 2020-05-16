import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledControllersComponent } from './installed-controllers.component';

describe('InstalledControllersComponent', () => {
  let component: InstalledControllersComponent;
  let fixture: ComponentFixture<InstalledControllersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalledControllersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalledControllersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
