import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedLabsComponent } from './offered-labs.component';

describe('OfferedLabsComponent', () => {
  let component: OfferedLabsComponent;
  let fixture: ComponentFixture<OfferedLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferedLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferedLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
