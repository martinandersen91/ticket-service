import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMainViewComponent } from './ticket-main-view.component';

describe('TicketMainViewComponent', () => {
  let component: TicketMainViewComponent;
  let fixture: ComponentFixture<TicketMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
