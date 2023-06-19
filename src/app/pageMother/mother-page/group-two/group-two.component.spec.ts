import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTwoComponent } from './group-two.component';

describe('GroupTwoComponent', () => {
  let component: GroupTwoComponent;
  let fixture: ComponentFixture<GroupTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupTwoComponent]
    });
    fixture = TestBed.createComponent(GroupTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
