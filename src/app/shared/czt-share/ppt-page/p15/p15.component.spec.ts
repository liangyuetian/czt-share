import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P15Component } from './p15.component';

describe('P15Component', () => {
    let component: P15Component;
    let fixture: ComponentFixture<P15Component>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [P15Component],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(P15Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
