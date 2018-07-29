import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftTopologyComponent } from './lift-topology.component';

describe('LiftTopologyComponent', () => {
  let component: LiftTopologyComponent;
  let fixture: ComponentFixture<LiftTopologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiftTopologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftTopologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
