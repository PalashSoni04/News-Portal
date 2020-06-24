import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListScreenComponent } from './news-list-screen.component';

describe('NewsListScreenComponent', () => {
    let component: NewsListScreenComponent;
    let fixture: ComponentFixture<NewsListScreenComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewsListScreenComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewsListScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
