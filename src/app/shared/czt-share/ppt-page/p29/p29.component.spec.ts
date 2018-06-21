import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P29Component } from './p29.component';

describe('P29Component', () => {
    let component: P29Component;
    let fixture: ComponentFixture<P29Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P29Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P29Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
