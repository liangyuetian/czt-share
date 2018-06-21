import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P28Component } from './p28.component';

describe('P28Component', () => {
    let component: P28Component;
    let fixture: ComponentFixture<P28Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P28Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P28Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
