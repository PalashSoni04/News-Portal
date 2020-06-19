import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherListScreenComponent } from './publisher-list-screen.component';

describe('PublisherListScreenComponent', () => {
  let component: PublisherListScreenComponent;
  let fixture: ComponentFixture<PublisherListScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisherListScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisherListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
