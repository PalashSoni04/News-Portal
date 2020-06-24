import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveNewsScreenComponent } from './active-news-screen.component';

describe('ActiveNewsScreenComponent', () => {
  let component: ActiveNewsScreenComponent;
  let fixture: ComponentFixture<ActiveNewsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveNewsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveNewsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
