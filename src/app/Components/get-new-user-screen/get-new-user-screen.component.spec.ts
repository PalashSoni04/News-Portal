import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewUserScreenComponent } from './get-new-user-screen.component';

describe('GetNewUserScreenComponent', () => {
  let component: GetNewUserScreenComponent;
  let fixture: ComponentFixture<GetNewUserScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNewUserScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNewUserScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
