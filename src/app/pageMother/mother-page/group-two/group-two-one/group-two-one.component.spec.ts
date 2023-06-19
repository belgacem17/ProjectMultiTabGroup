import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTwoOneComponent } from './group-two-one.component';

describe('GroupTwoOneComponent', () => {
  let component: GroupTwoOneComponent;
  let fixture: ComponentFixture<GroupTwoOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupTwoOneComponent]
    });
    fixture = TestBed.createComponent(GroupTwoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
