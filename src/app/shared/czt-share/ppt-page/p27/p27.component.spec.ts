import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P27Component } from './p27.component';

describe('P27Component', () => {
    let component: P27Component;
    let fixture: ComponentFixture<P27Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P27Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P27Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
