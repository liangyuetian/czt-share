import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P20Component } from './p20.component';

describe('P20Component', () => {
    let component: P20Component;
    let fixture: ComponentFixture<P20Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P20Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P20Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
