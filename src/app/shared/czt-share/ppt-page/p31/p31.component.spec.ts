import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P31Component } from './p31.component';

describe('P31Component', () => {
    let component: P31Component;
    let fixture: ComponentFixture<P31Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P31Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P31Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
