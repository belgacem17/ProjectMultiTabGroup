import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTwoTwoComponent } from './group-two-two.component';

describe('GroupTwoTwoComponent', () => {
  let component: GroupTwoTwoComponent;
  let fixture: ComponentFixture<GroupTwoTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupTwoTwoComponent]
    });
    fixture = TestBed.createComponent(GroupTwoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
