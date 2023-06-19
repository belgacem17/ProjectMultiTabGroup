import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherPageComponent } from './mother-page.component';

describe('MotherPageComponent', () => {
  let component: MotherPageComponent;
  let fixture: ComponentFixture<MotherPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotherPageComponent]
    });
    fixture = TestBed.createComponent(MotherPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
