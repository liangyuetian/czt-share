import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P11Component } from './p11.component';

describe('P11Component', () => {
    let component: P11Component;
    let fixture: ComponentFixture<P11Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P11Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P11Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
