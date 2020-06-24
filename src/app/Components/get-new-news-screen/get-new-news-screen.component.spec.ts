import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewNewsScreenComponent } from './get-new-news-screen.component';

describe('GetNewNewsScreenComponent', () => {
  let component: GetNewNewsScreenComponent;
  let fixture: ComponentFixture<GetNewNewsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetNewNewsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetNewNewsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
