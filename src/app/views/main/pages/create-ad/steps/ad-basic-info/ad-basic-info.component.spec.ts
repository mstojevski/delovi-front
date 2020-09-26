import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBasicInfoComponent } from './ad-basic-info.component';

describe('AdBasicInfoComponent', () => {
  let component: AdBasicInfoComponent;
  let fixture: ComponentFixture<AdBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
