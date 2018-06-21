import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P19Component } from './p19.component';

describe('P19Component', () => {
    let component: P19Component;
    let fixture: ComponentFixture<P19Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P19Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P19Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
