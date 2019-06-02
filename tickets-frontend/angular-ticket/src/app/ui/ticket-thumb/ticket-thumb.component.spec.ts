import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketThumbComponent } from './ticket-thumb.component';

describe('TicketThumbComponent', () => {
  let component: TicketThumbComponent;
  let fixture: ComponentFixture<TicketThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
