import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallOfResidenceComponent } from './hall-of-residence.component';

describe('HallOfResidenceComponent', () => {
  let component: HallOfResidenceComponent;
  let fixture: ComponentFixture<HallOfResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallOfResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
