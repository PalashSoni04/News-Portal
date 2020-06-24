import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherNewsScreenComponent } from './publisher-news-screen.component';

describe('PublisherNewsScreenComponent', () => {
  let component: PublisherNewsScreenComponent;
  let fixture: ComponentFixture<PublisherNewsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherNewsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherNewsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
