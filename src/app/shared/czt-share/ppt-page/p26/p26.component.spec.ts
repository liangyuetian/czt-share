import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P26Component } from './p26.component';

describe('P26Component', () => {
    let component: P26Component;
    let fixture: ComponentFixture<P26Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P26Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P26Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
