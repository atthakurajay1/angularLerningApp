import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProviderExpComponent } from './view-provider-exp.component';

describe('ViewProviderExpComponent', () => {
  let component: ViewProviderExpComponent;
  let fixture: ComponentFixture<ViewProviderExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProviderExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProviderExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
